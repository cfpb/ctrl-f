import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Button } from './Button';
import { ISearchDataProps, SearchModal } from './SearchModal';
import './index.css';

interface ICtrlFProps {
  searchData: ISearchDataProps[];
  searchOptions?: object;
  placeholder?: string;
  buttonText?: string;
}

const defaultSearchOptions = {
  keys: ['contents'],
  includeMatches: true,
  includeScore: true,
  threshold: 0.5
};

const CtrlF = ({
  searchData,
  searchOptions = defaultSearchOptions,
  placeholder = 'Enter search terms',
  buttonText = 'Search this page'
}: ICtrlFProps): JSX.Element => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Button text={buttonText} />
        <SearchModal
          searchData={searchData}
          searchOptions={searchOptions}
          placeholder={placeholder}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export const init = (container: HTMLElement | null, props: ICtrlFProps): void => {
  if (!container) return;
  ReactDOM.createRoot(container).render(<CtrlF {...props} />);
};
