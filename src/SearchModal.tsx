import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { Modal } from './Modal';
import { ISearchResultProps } from './SearchResult';
import { SearchResults } from './SearchResults';
import { useSearchParams } from 'react-router-dom';

export interface ISearchDataProps {
  id: number;
  title: string;
  contents: string;
  link: string;
}

interface ISearchModalProps {
  modal?: typeof Modal;
  searchOptions: object;
  searchData: ISearchDataProps[];
  placeholder?: string;
}

const renderMatchLine = (match: any, i: number) => {
  if (!match) {
    return null;
  }
  const value = match.value;
  const spans = [];
  for (let i = 0; i < match.indices.length; i++) {
    const curInd = match.indices[i];
    const nextInd = match.indices[i + 1];
    const matchedVal = (
      <span className="tw-bg-yellow-200" key={`match-index-highlight-${i}`}>
        {value.substring(curInd[0], curInd[1] + 1)}
      </span>
    );
    const remaining = (
      <span key={`match-index-${i}`}>
        {value.substring(curInd[1] + 1, (nextInd && nextInd[0]) || value.length)}
      </span>
    );
    spans.push(matchedVal);
    spans.push(remaining);
  }
  return (
    <p key={`snippet-${i}`} className="tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden">
      {[...spans]}
    </p>
  );
};

export const SearchModal = ({
  modal = Modal,
  searchOptions,
  searchData,
  placeholder
}: ISearchModalProps) => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ISearchResultProps[] | undefined>();

  const performSearch = (query: string): ISearchResultProps[] => {
    const fuse = new Fuse(searchData, searchOptions);
    let searchResults = fuse.search(query);
    return searchResults.map((result: any) => {
      return {
        id: result.item.id,
        title: result.item.title,
        snippet: result.matches.map((match: any, i: number) => renderMatchLine(match, i)),
        link: result.item.link
      };
    });
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    const searchResults = performSearch(event.target.value);
    setResults(searchResults);
  };

  return (
    <modal.Frame
      open={!!params.get('search')}
      onClose={() => {
        params.delete('search');
        setParams(params);
      }}
    >
      <modal.Body>
        <label className="tw-relative tw-focus-within:text-gray-600 tw-block tw-text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tw-pointer-events-none tw-tw-w-8 tw-h-8 tw-absolute tw-top-1/2 tw-transform tw--translate-y-1/2 tw-left-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
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
        <div className={`${results?.length ? '' : 'tw-hidden'}`}>
          <h3 className="tw-font-bold tw-m-4">Search results:</h3>
          <div className="tw-overflow-y-auto tw-max-h-[70vh]">
            <SearchResults results={results} />
          </div>
        </div>
      </modal.Body>
    </modal.Frame>
  );
};
