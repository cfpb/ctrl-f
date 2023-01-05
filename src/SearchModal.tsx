import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Fuse from 'fuse.js';
import { Modal } from './Modal';
import { ISearchResultProps } from './SearchResult';
import { SearchResults } from './SearchResults';
import { getSnippetStart, getSnippetEnd } from './utils';
import { useDebouncedCallback } from 'use-debounce';

export interface ISearchDataProps {
  id: number;
  title: string;
  contents: string;
  link: string;
}

interface ISearchModalProps {
  modal?: typeof Modal;
  searchOptions: Fuse.IFuseOptions<object>;
  searchData: ISearchDataProps[];
  placeholder?: string;
  maxResults?: number;
  onClose?: () => null;
  onFollow?: () => null;
  onSubmit?: (query: string) => null;
}

const renderMatchLine = (match: any, i: number) => {
  if (!match) {
    return null;
  }
  // Show longest matches first
  match.indices = match.indices.sort((a: number[], b: number[]) => {
    return b[1] - b[0] - (a[1] - a[0]);
  });
  const value = match.value;
  const spans = [];
  for (let i = 0; i < match.indices.length; i++) {
    const curInd = match.indices[i];
    const start = getSnippetStart(value, curInd[0], 20);
    const end = getSnippetEnd(value, curInd[1], 20);
    const preVal = <span key={`match-index-${i}`}>{value.substring(start, curInd[0])}</span>;
    const matchedVal = (
      <span className="tw-bg-yellow-200" key={`match-index-highlight-${i}`}>
        {value.substring(curInd[0], curInd[1] + 1)}
      </span>
    );
    const postVal = <span key={`match-index-${i}`}>{value.substring(curInd[1] + 1, end)}... </span>;
    spans.push(preVal);
    spans.push(matchedVal);
    spans.push(postVal);
  }
  return (
    <p key={`snippet-${i}`} className="tw-line-clamp-3">
      {[...spans]}
    </p>
  );
};

export const SearchModal = ({
  modal = Modal,
  searchOptions,
  searchData,
  placeholder,
  maxResults,
  onClose = () => null,
  onFollow = () => null,
  onSubmit = (query: string) => null
}: ISearchModalProps) => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ISearchResultProps[] | undefined>();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const performSearch = (query: string): ISearchResultProps[] => {
    searchOptions.minMatchCharLength = Math.ceil(query.length / 2);
    const fuse = new Fuse(searchData, searchOptions);
    let searchResults = fuse.search(query);
    return searchResults.map((result: any) => {
      return {
        id: result.item.id,
        title: result.item.title,
        snippet: result.matches.map((match: any, i: number) => renderMatchLine(match, i)),
        link: result.item.link,
        onFollow: onFollow
      };
    });
  };

  const debouncedInputHandler = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const searchResults = performSearch(e.target.value).slice(0, maxResults);
    setResults(searchResults);
  }, 300);

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setQuery('');
    setResults([]);
    searchInputRef.current?.focus();
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
  };

  useEffect(() => {
    if (query.length) {
      onSubmit(query);
    }
  }, [onSubmit, query]);

  return (
    <modal.Frame
      open={!!params.get('search')}
      onClose={() => {
        params.delete('search');
        setParams(params);
        onClose();
      }}>
      <modal.Body>
        <label className="tw-relative tw-focus-within:text-gray-600 tw-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tw-pointer-events-none tw-absolute tw-top-1/2 tw-transform tw--translate-y-1/2 tw-left-3 tw-w-4 tw-h-4"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z" />
          </svg>
          <input
            id="ctrl-f-search-input"
            placeholder={placeholder}
            ref={searchInputRef}
            onChange={debouncedInputHandler}
            className="tw-py-2 tw-px-4 tw-block tw-pl-8 tw-w-3/4"
          />
          <button
            id="ctrl-f-clear-button"
            type="button"
            onClick={clickHandler}
            className={`${
              query?.length ? '' : 'tw-hidden '
            }tw-ml-4 a-btn a-btn__link a-btn__warning`}>
            Clear <span className="tw-hidden md:tw-inline">search</span>
          </button>
        </label>
        <div className={`${query?.length && !results?.length ? '' : 'tw-hidden'}`}>
          <h3 className="tw-m-4 tw-text-[#4F5257]">
            No results found. Try entering a different search term above.
          </h3>
        </div>
        <div className={`${results?.length ? '' : 'tw-hidden'}`} id="ctrl-f-search-results">
          <h3 className="tw-mt-4 tw-mb-2 tw-ml-3">Showing results for "{query}"</h3>
          <div className="tw-overflow-y-auto tw-max-h-[70vh] tw-pr-4">
            <SearchResults results={results} />
          </div>
        </div>
      </modal.Body>
    </modal.Frame>
  );
};
