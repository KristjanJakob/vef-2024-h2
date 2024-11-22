import { renderNavigation } from '../components/navigation.js';
import { el } from '../elements.js';

export function renderIndexPage(root, indexJson) {
  root.innerHTML = ''; // Clear the root content

  // Create header, navigation, main, and footer
  const header = el('header', {}, el('h1', {}, indexJson.title));
  const nav = renderNavigation(indexJson.navigation);
  const main = el('main', {}, el('p', {}, indexJson.description));
  const footer = el('footer', {}, indexJson.footer);

  // Append text if it exists
  if (indexJson.text) {
    const textElement = el('p', {}, indexJson.text);
    main.appendChild(textElement);
  }

  // Append quote if it exists
  if (indexJson.quote) {
    const quoteElement = el('blockquote', {}, indexJson.quote);
    main.appendChild(quoteElement);
  }

  // Append everything to the root
  root.append(header, nav, main, footer);
}



