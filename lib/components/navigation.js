import { el } from '../elements.js';

export function renderNavigation(navigation) {
  const nav = el('nav');
  const ul = el('ul');

  navigation.forEach(({ title, slug }) => {
    const link = el('a', { href: `/?type=${slug}` }, title);
    const li = el('li', {}, link);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
}

