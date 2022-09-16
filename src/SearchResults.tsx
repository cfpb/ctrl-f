import { ISearchResultProps, SearchResult } from './SearchResult';

interface ISearchResultsProps {
  results: ISearchResultProps[] | undefined
}

export const SearchResults = ({results}: ISearchResultsProps): JSX.Element => {
  return (
    <ul className="search-result">
      {results && results.length > 0 ? (
        results.map((result) => (
          <SearchResult key={result.id} id={result.id} title={result.title} snippet={result.snippet} link={result.link} />
        ))
      ) : (
        ''
      )}
    </ul>
  );
};
