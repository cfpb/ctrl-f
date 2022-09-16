import { useSearchParams } from "react-router-dom";
import { Modal } from "./Modal";
import { SearchModal } from "./SearchModal";
import { parseData } from "./utils";
import { SAMPLE_DATA } from "./sample-data";
import './App.css';

const App = (): JSX.Element => {
  const [params, setParams] = useSearchParams();

  const searchOptions = {
    keys: ['title', 'body'],
    includeMatches: true,
    includeScore: true,
    threshold: 0.5
  };

  return (
    <div>
      <button id="open-search" className="mb-4" onClick={() => setParams({ ...params, modal: "true" })}>
          <span className="m-global-search_trigger-open-label">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 19" className="cf-icon-svg"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></svg> 
              <span> Search this guide</span>
          </span>
      </button>
      <SearchModal
        modal={Modal}
        searchOptions={searchOptions}
        searchData={SAMPLE_DATA}
        placeholder='Enter search terms'
      />
    </div>
  );
}

export default App;
