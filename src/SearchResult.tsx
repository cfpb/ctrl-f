import { useSearchParams } from "react-router-dom";

export interface ISearchResultProps {
  id: number;
  title: string;
  snippet: string;
  link: string;
}

export const SearchResult = ({id, title, snippet, link}: ISearchResultProps): JSX.Element => {
  const [params, setParams] = useSearchParams();

  const clickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    params.delete("modal");
    setParams(params);
  };

  return (
    <li className="mb-4">
      <a href={link} onClick={clickHandler}>
        <h3 className="font-bold">{title}</h3>
        <div className="search-result-snippet">{snippet}</div>
      </a>
    </li>
  );
};

