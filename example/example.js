import { init } from '../src/index';

const searchOptions = {
  keys: ['contents'],
  includeMatches: true,
  includeScore: true,
  minMatchCharLength: 3,
  threshold: 0.4
};

const buttonText = 'Search this page';

const placeholder = 'Enter keywords';

const container = document.getElementById('search');
const searchData = [];
const sections = [...document.querySelectorAll('[data-search-section]')];

sections.forEach((section, i) => {
  const heading = section.querySelector('h3');
  heading.setAttribute('id', (Math.random() + 1).toString(36).substring(7));
  [...section.querySelectorAll('p')].forEach((paragraph, j) => {
    searchData.push({
      id: `${heading.getAttribute('id')}${i}${j}`,
      title: heading.innerText,
      contents: paragraph.innerText.split('\n').join(' '),
      link: '#' + heading.getAttribute('id')
    });
  });
});

const onClose = () => {
  console.log('search modal closed!');
};

const onFollow = () => {
  console.log("a search result was followed (clicked/tapped/enter'ed)!");
};

const onSubmit = query => {
  console.log(`You searched for ${query}!`);
};

init(container, { searchOptions, placeholder, buttonText, searchData, onClose, onFollow, onSubmit });
