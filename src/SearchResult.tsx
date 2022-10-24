import { useSearchParams } from 'react-router-dom';

export interface ISearchResultProps {
  id: number;
  title: string;
  snippet: string;
  link: string;
  onFollow?: (event: React.MouseEvent<HTMLAnchorElement>) => null;
}

export const SearchResult = ({
  id,
  title,
  snippet,
  link,
  onFollow = () => null
}: ISearchResultProps): JSX.Element => {
  const [params, setParams] = useSearchParams();

  const clickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    params.delete('search');
    setParams(params);
    onFollow(event);
  };

  return (
    <li className="tw-list-none ctrl-f-search-result">
      <a
        className="tw-text-black tw-block tw-border-0 tw-border-black tw-mb-2 tw-p-4 tw-rounded focus:tw-p-3.5 focus:tw-outline-0 focus:tw-border-2 hover:tw-border-2 hover:tw-text-black hover:tw-border-black hover:tw-p-3.5"
        href={link}
        onClick={clickHandler}>
        <h4 className="tw-font-medium">{title}</h4>
        <div>{snippet}</div>
      </a>
    </li>
  );
};
