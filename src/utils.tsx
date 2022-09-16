import { useEffect, useRef } from "react";

export const parseData = ( elements: NodeListOf<HTMLElement> ) => {
  const data = Array.from( elements ).map( (element: HTMLElement) => {
    const heading = element.querySelector('.o-fig_heading') as HTMLElement;
    return {
      title: heading != null ? heading.innerText : '',
      contents: (element as HTMLElement).innerText.split( '\n\n' ).join( ' ' )
    }
  });
  return data;
}

export const usePortal = () => {
  const portal = useRef(document.createElement("div"));

  useEffect(() => {
    const current = portal.current;
    document.body.appendChild(portal.current);
    return () => void document.body.removeChild(current);
  }, []);

  return portal;
};

export const getFocusableElements = (parent?: HTMLElement | null): HTMLElement[] => {
  if (!parent) return [];

  return (
    Array.from(parent.querySelectorAll("a[href], button, input, textarea, select, details,[tabindex]"))
      .filter(
        (el) => el.getAttribute("tabindex") !== "-1" && !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
      )
      // sort tabindexes as follows: 1, 2, 3, 4, ..., 0, 0, 0
      .sort((a, b) => {
        const aIndex = Number(a.getAttribute("tabindex")) ?? 0;
        const bIndex = Number(b.getAttribute("tabindex")) ?? 0;
        if (aIndex === bIndex) return 0;
        if (aIndex === 0) return 1;
        if (bIndex === 0) return -1;
        return aIndex < bIndex ? -1 : 1;
      }) as HTMLElement[]
  );
};

export const nextFocus = (elements: HTMLElement[], forward = true) => {
  const currentIndex = elements.findIndex((e) => e === document.activeElement);
  let nextIndex = 0;

  if (currentIndex > -1) {
    if (forward) {
      nextIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
    } else {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
    }
  }

  elements[nextIndex]?.focus();
};
