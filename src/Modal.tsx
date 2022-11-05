import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { getFocusableElements, nextFocus, usePortal } from './utils';

interface IFrameProps {
  children?: React.ReactNode;
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  onClose: () => void;
  open?: boolean;
}

const Frame = ({
  children,
  closeOnClickOutside = true,
  closeOnEsc = true,
  onClose,
  open = true
}: IFrameProps): JSX.Element => {
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
        case 'Escape': {
          if (closeOnEsc) onClose();
          break;
        }
        case 'Tab': {
          e.preventDefault();
          nextFocus(getFocusableElements(container.current), !e.shiftKey);
          break;
        }
        case 'ArrowDown': {
          e.preventDefault();
          nextFocus(getFocusableElements(container.current));
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          nextFocus(getFocusableElements(container.current), false);
          break;
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [closeOnEsc, onClose, open]);

  useEffect(() => {
    // aria-hidden
    document.getElementById('root')?.setAttribute('aria-hidden', open.toString());
    portal.current?.setAttribute('aria-hidden', (!open).toString());

    if (open) {
      previousFocus.current = (document.activeElement as HTMLElement) ?? null;
      nextFocus(getFocusableElements(container.current));
    } else {
      previousFocus.current?.focus?.();
      previousFocus.current = null;
    }
  }, [open, portal]);

  return ReactDOM.createPortal(
    <div
      className={classNames(
        'tw-fixed tw-inset-0 tw-z-10 tw-p-8 tw-bg-gray-600/90',
        `${open ? 'tw-visible' : 'tw-invisible'}`
      )}
      onClick={closeOnClickOutside ? onOverlayClick : undefined}
      id="ctrl-f-modal"
    >
      <div className="tw-relative tw-w-full tw-max-w-4xl tw-mx-auto tw-mt-8" ref={container}>
        <div className="tw-bg-white tw-rounded tw-shadow-xl tw-max-h-[90vh]">{children}</div>
        <button
          className="tw-absolute tw--top-2 tw--right-2 tw-flex tw-justify-center tw-rounded-full tw-h-8 tw-w-8 tw-bg-white tw-cursor-pointer tw-shadow-xl tw-outline-none tw-border-2 tw-border-gray-600"
          onClick={() => onClose()}
          title="Close search tool"
        >
          <span className="text-2xl leading-6 select-none">&times;</span>
        </button>
      </div>
    </div>,
    portal.current
  );
};

const Head = ({ children }: { children?: React.ReactNode }): JSX.Element => (
  <div className="tw-px-4 tw-py-2">
    <h1 className="tw-text-lg">{children}</h1>
  </div>
);

const Body = ({ children }: { children?: React.ReactNode }): JSX.Element => (
  <div className="tw-p-4">{children}</div>
);

export const Modal = { Frame, Head, Body };
