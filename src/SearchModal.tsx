import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { Modal } from './Modal';
import { ISearchResultProps } from './SearchResult';
import { SearchResults } from './SearchResults';
import { useSearchParams } from 'react-router-dom';

interface ISearchDataProps {
  id: number;
  title: string;
  contents: string;
  link: string;
}

interface ISearchModalProps {
  modal: typeof Modal;
  searchOptions: object;
  searchData: ISearchDataProps[];
  placeholder?: string;
}

const renderMatchLine = (match: any) => {
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
        {value.substring(
          curInd[1] + 1,
          (nextInd && nextInd[0]) || value.length
        )}
      </span>
    );
    spans.push(matchedVal);
    spans.push(remaining);
  }
  spans.push(<span>...</span>);
  return <p>{spans.map((d, idx) => d)}</p>;
};

export const SearchModal = ({
  modal,
  searchOptions,
  searchData,
  placeholder,
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
        snippet: result.matches.map((match: any) => renderMatchLine(match)),
        link: result.item.link,
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
      open={!!params.get('modal')}
      onClose={() => {
        params.delete('modal');
        setParams(params);
      }}
    >
      <modal.Head>Search this guide</modal.Head>
      <modal.Body>
        <div className="tw-flex tw-flex-row">
          <div className="tw-basis-3/4">
            <input
              className="tw-text-gray-800 tw-border-2 tw-border-black tw-focus:border-blue-300 tw-p-1"
              placeholder="Search terms"
              value={query}
              onChange={inputHandler}
            />
          </div>
          <div className="basis-1/4">
            <button className="tw-text-gray-100 tw-border-2 tw-border-blue-700 tw-bg-blue-600 tw-rounded tw-shadow-xl tw-p-2 tw-outline-none focus:tw-border-blue-300">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <SearchResults results={results} />
        </div>
      </modal.Body>
    </modal.Frame>
  );
};
