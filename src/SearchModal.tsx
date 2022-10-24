import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Fuse from 'fuse.js';
import { Modal } from './Modal';
import { ISearchResultProps } from './SearchResult';
import { SearchResults } from './SearchResults';
import { getSnippetStart, getSnippetEnd } from './utils';

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
  onFollow = () => null
}: ISearchModalProps) => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ISearchResultProps[] | undefined>();

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

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    const searchResults = performSearch(event.target.value).slice(0, maxResults);
    setResults(searchResults);
  };

  return (
    <modal.Frame
      open={!!params.get('search')}
      onClose={() => {
        params.delete('search');
        setParams(params);
        onClose();
      }}>
      <modal.Body>
        <label className="tw-relative tw-focus-within:text-gray-600 tw-block tw-text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tw-pointer-events-none tw-tw-w-8 tw-h-8 tw-absolute tw-top-1/2 tw-transform tw--translate-y-1/2 tw-left-3"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z" />
          </svg>
          <input
            id="ctrl-f-search-input"
            placeholder={placeholder}
            value={query}
            onChange={inputHandler}
            className="tw-form-input tw-border tw-border-gray-900 tw-py-3 tw-px-4 tw-bg-white tw-appearance-none tw-w-full tw-block tw-pl-12 focus:tw-outline-none"
          />
        </label>
        <div className={`${results?.length ? '' : 'tw-hidden'}`} id="ctrl-f-search-results">
          <h3 className="tw-m-4 tw-text-[#4F5257]">Search results</h3>
          <div className="tw-overflow-y-auto tw-max-h-[70vh]">
            <SearchResults results={results} />
          </div>
        </div>
      </modal.Body>
    </modal.Frame>
  );
};
