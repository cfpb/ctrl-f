import { useSearchParams } from 'react-router-dom';

export interface IButtonProps {
  text: string;
}

export const Button = ({ text }: IButtonProps): JSX.Element => {
  const [params, setParams] = useSearchParams();

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    params.set('search', 'true');
    setParams(params);
  };

  return (
    <div className="tw-relative tw-pointer-events-auto">
      <button
        type="button"
        className="tw-border tw-border-slate-600 tw-border-solid tw-w-full md:tw-bg-white tw-flex tw-bg-white tw-mt-2.5 tw-mb-4 tw-items-center tw-text-slate-600 tw-py-1.5 tw-pl-2"
        onClick={clickHandler}>
        <svg width="24" height="24" fill="none" aria-hidden="true" className="tw-mr-1 tw-flex-none">
          <path
            d="m19 19-3.5-3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
          <circle
            cx="11"
            cy="11"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"></circle>
        </svg>
        {text}
      </button>
    </div>
  );
};
