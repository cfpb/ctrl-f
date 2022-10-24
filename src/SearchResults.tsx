import { ISearchResultProps, SearchResult } from './SearchResult';

interface ISearchResultsProps {
  results: ISearchResultProps[] | undefined;
}

export const SearchResults = ({ results }: ISearchResultsProps): JSX.Element => {
  return (
    <ul className="tw-p-0.5">
      {results && results.length > 0
        ? results.map((result) => (
            <SearchResult
              key={result.id.toString()}
              id={result.id}
              title={result.title}
              snippet={result.snippet}
              link={result.link}
              onFollow={result.onFollow}
            />
          ))
        : ''}
    </ul>
  );
};
