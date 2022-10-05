import { useEffect, useRef } from 'react';

/**
 * Returns a reasonable starting point when generating a search result
 * text snippet.
 *
 * @remarks
 * Given a text string and the index of a keyword match within that string,
 * traverse backwards from the index until a space character is found,
 * returning the index of the character.
 *
 * If no space is found or the match is close to the start of the string,
 * return the original match location.
 *
 * @param text - Text string
 * @param matchLocation - Index of keyword match within text string
 * @param distance - How far backwards to traverse
 * @returns Index denoting the start of the snippet
 *
 */
export const getSnippetStart = (text: string, matchLocation: number, distance = 10): number => {
  const snippetStart = text.lastIndexOf(' ', matchLocation - distance) + 1;
  if (snippetStart === 0 || matchLocation <= distance) return 0;
  return snippetStart;
};

/**
 * Returns a reasonable ending point when generating a search result
 * text snippet.
 *
 * @remarks
 * Given a text string and the index of the end of the keyword match within
 * that string, search forward from the index until a space character is found,
 * returning the index of the character.
 *
 * If no space is found, return the index of the string's last character.
 *
 * @param text - Text string
 * @param matchEndLocation - Index of end of keyword match within text string
 * @param distance - How far past the end of the match to traverse
 * @returns Index denoting the end of the snippet
 *
 */
export const getSnippetEnd = (text: string, matchEndLocation: number, distance = 20): number => {
  const snippetEnd = text.indexOf(' ', matchEndLocation + distance) - 1;
  if (snippetEnd < 0) return text.length - 1;
  return snippetEnd;
};

export const parseData = (elements: NodeListOf<HTMLElement>) => {
  const data = Array.from(elements).map((element: HTMLElement) => {
    const heading = element.querySelector('.o-fig_heading') as HTMLElement;
    return {
      title: heading != null ? heading.innerText : '',
      contents: (element as HTMLElement).innerText.split('\n\n').join(' ')
    };
  });
  return data;
};

export const usePortal = () => {
  const portal = useRef(document.createElement('div'));

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
    Array.from(
      parent.querySelectorAll('a[href], button, input, textarea, select, details,[tabindex]')
    )
      .filter(
        (el) =>
          el.getAttribute('tabindex') !== '-1' &&
          !el.hasAttribute('disabled') &&
          !el.getAttribute('aria-hidden')
      )
      // sort tabindexes as follows: 1, 2, 3, 4, ..., 0, 0, 0
      .sort((a, b) => {
        const aIndex = Number(a.getAttribute('tabindex')) ?? 0;
        const bIndex = Number(b.getAttribute('tabindex')) ?? 0;
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
