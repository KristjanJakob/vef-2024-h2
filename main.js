import { renderIndexPage } from './lib/pages/index-page.js';
import { renderSubpage } from './lib/pages/sub-page.js';
import { renderContentPage } from './lib/pages/content-page.js';
import { fetcher } from './lib/fetcher.js';

async function render(root, querystring) {
  const mainIndexJson = await fetcher('data/index.json');

  const params = new URLSearchParams(querystring);
  const type = params.get('type');
  const content = params.get('content');

  if (!type) {
    return renderIndexPage(root, mainIndexJson);
  }

  if (content) {
    return renderContentPage(root, type, content);
  }

  renderSubpage(root, mainIndexJson, type);
}

const root = document.querySelector('#app');
window.addEventListener('popstate', () => render(root, window.location.search));

render(root, window.location.search);


