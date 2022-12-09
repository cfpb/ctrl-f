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
    <li className="tw-list-none ctrl-f-search-result tw-mb-5 tw-pb-3">
      <a
        className="tw-text-black tw-block tw-p-2 tw-m-1 tw-border-0"
        href={link}
        onClick={clickHandler}>
        <h4 className="tw-font-medium">{title}</h4>
        <div>{snippet}</div>
      </a>
    </li>
  );
};
