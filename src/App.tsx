import { useSearchParams } from 'react-router-dom';
import { Modal } from './Modal';
import { SearchModal } from './SearchModal';
import { parseData } from './utils';
import { SAMPLE_DATA } from './sample-data';
import './App.css';

const App = (): JSX.Element => {
  const [params, setParams] = useSearchParams();

  const searchOptions = {
    keys: ['title', 'body'],
    includeMatches: true,
    includeScore: true,
    threshold: 0.5,
  };

  return (
    <div>
      <SearchModal
        modal={Modal}
        searchOptions={searchOptions}
        searchData={SAMPLE_DATA}
        placeholder="Enter search terms"
      />
    </div>
  );
};

export default App;
