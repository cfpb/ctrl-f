import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { getFocusableElements, nextFocus, usePortal } from "./utils";

interface IFrameProps {
  children?: React.ReactNode;
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  onClose: () => void;
  open?: boolean
}

const Frame = ({ children, closeOnClickOutside = true, closeOnEsc = true, onClose, open = true }: IFrameProps): JSX.Element => {
  const portal = usePortal();
  const previousFocus = useRef<HTMLElement | null>(null);

  // close on click outside
  const container = useRef<HTMLDivElement>(null);
  const onOverlayClick = (e: React.MouseEvent) => {
    if (!container.current?.contains(e.target as Node)) onClose();
  };

  // close on esc
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case "Escape": {
          if (closeOnEsc) onClose();
          break;
        }
        case "Tab": {
          e.preventDefault();
          nextFocus(getFocusableElements(container.current), !e.shiftKey);
          break;
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeOnEsc, onClose, open]);

  useEffect(() => {
    // aria-hidden
    document.getElementById("root")?.setAttribute("aria-hidden", open.toString());
    portal.current?.setAttribute("aria-hidden", (!open).toString());

    if (open) {
      previousFocus.current = (document.activeElement as HTMLElement) ?? null;
      nextFocus(getFocusableElements(container.current));
    } else {
      previousFocus.current?.focus?.();
      previousFocus.current = null;
    }
  }, [open, portal]); // note: when importing, eslint doesn't recognize that portal is a ref, so it doesn't need to be in the deps array

  return ReactDOM.createPortal(
    // transparent overlay: `inset-0` to stretch over the entire screen (combines`top-0`, `right-0`, `bottom-0`, and `left-0`)
    <div
      className={classNames(
        "fixed inset-0 z-10 p-8 bg-gray-600/90",
        `${open ? "visible" : "invisible"}` // control visibility via `open` attribute (or render conditionally)
      )}
      onClick={closeOnClickOutside ? onOverlayClick : undefined}
    >
      {/* container: `max-w-sm` to make it reasonably narrow, `mx-auto` to center horizontally */}
      <div className="relative w-full max-w-lg mx-auto mt-8" ref={container}>
        {/* contents */}
        <div className="bg-white rounded shadow-xl">{children}</div>
        {/* closer in the corner */}
        <button
          className="absolute -top-2 -right-2 flex justify-center rounded-full h-8 w-8 bg-white cursor-pointer shadow-xl outline-none border-2 border-gray-600 focus:border-blue-300"
          onClick={() => onClose()}
          title="Bye bye 👋"
        >
          <span className="text-2xl leading-6 select-none">&times;</span>
        </button>
      </div>
    </div>,
    portal.current
  );
};

const Head = ({ children }: {children?: React.ReactNode}): JSX.Element => (
  <div className="px-4 py-2">
    <h1 className="text-lg">{children}</h1>
  </div>
);

const Body = ({ children }: {children?: React.ReactNode}): JSX.Element => <div className="p-4">{children}</div>;

export const Modal = { Frame, Head, Body };
