import { renderNavigation } from '../components/navigation.js';
import { el } from '../elements.js';

export function renderIndexPage(root, indexJson) {
  root.innerHTML = ''; 

  const header = el('header', {}, el('h1', {}, indexJson.title));
  const nav = renderNavigation(indexJson.navigation);
  const main = el('main', {}, el('p', {}, indexJson.description));
  const footer = el('footer', {}, indexJson.footer);

  if (indexJson.text) {
    const textElement = el('p', {}, indexJson.text);
    main.appendChild(textElement);
  }

  if (indexJson.quote) {
    const quoteElement = el('blockquote', {}, indexJson.quote);
    main.appendChild(quoteElement);
  }

  root.append(header, nav, main, footer);
}



