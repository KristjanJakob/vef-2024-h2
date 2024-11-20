import { renderNavigation } from '../components/navigation.js';
import { el } from '../elements.js';

export function renderIndexPage(root, indexJson) {
  root.innerHTML = ''; // Clear existing content

  const header = el('header', {}, el('h1', {}, indexJson.title));
  const nav = renderNavigation(indexJson.navigation);
  const main = el('main', {}, el('p', {}, indexJson.description));
  const footer = el('footer', {}, indexJson.footer);

  root.append(header, nav, main, footer);
}


