import { renderNavigation } from '../components/navigation.js'; // Fixed path
import { el } from '../elements.js'; 
import { fetcher } from '../fetcher.js'; 

export async function renderSubpage(root, indexJson, type) {
  root.innerHTML = ''; 

  const header = el('header', {}, el('h1', {}, indexJson.title));
  const nav = renderNavigation(indexJson.navigation);
  const footer = el('footer', {}, indexJson.footer);

  const contentJson = await fetcher(`data/${type}/index.json`);
  const content = el('main', {});

  contentJson.content.forEach(({ title, text }) => {
    const section = el('section', {}, el('h2', {}, title), el('p', {}, text));
    content.appendChild(section);
  });

  root.append(header, nav, content, footer);
}


