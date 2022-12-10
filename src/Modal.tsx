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
    // Nowadays `aria-modal` and `inert` are preferred over `aria-hidden`
    document.getElementById('root')?.setAttribute('inert', '');
    portal.current?.setAttribute('role', 'dialog');
    portal.current?.setAttribute('aria-modal', 'true');

    if (open) {
      previousFocus.current = (document.activeElement as HTMLElement) ?? null;
      nextFocus(getFocusableElements(container.current));
      // Skip the modal's close button on open
      nextFocus(getFocusableElements(container.current));
    } else {
      previousFocus.current?.focus?.();
      previousFocus.current = null;
    }
  }, [open, portal]);

  return ReactDOM.createPortal(
    <div
      className={classNames(
        'tw-fixed tw-inset-0 tw-z-10 tw-p-4 md:tw-p-8 tw-bg-gray-600/90',
        `${open ? 'tw-visible' : 'tw-invisible'}`
      )}
      onClick={closeOnClickOutside ? onOverlayClick : undefined}
      id="ctrl-f-modal">
      <div
        className="tw-relative tw-w-full tw-max-w-[42em] tw-mx-auto md:tw-mt-8 tw-bg-white tw-shadow-xl tw-max-h-[90vh]"
        ref={container}>
        <button
          className="tw-absolute tw-top-2 tw-right-3 tw-border-0 a-btn__link tw-text-black"
          id="ctrl-f-close-button"
          onClick={() => onClose()}
          title="Close search tool">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 12 19">
            <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
          </svg>
        </button>
        <div>{children}</div>
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
  <div className="tw-p-6 tw-pr-2">{children}</div>
);

export const Modal = { Frame, Head, Body };
