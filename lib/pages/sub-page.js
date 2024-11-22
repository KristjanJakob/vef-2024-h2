import { renderNavigation } from '../components/navigation.js';
import { el } from '../elements.js';
import { fetcher } from '../fetcher.js';
import { renderContentPage } from './content-page.js'; 

export async function renderSubpage(root, mainIndexJson, type) {
  root.innerHTML = ''; 

  const header = el('header', {}, el('h1', {}, mainIndexJson.title));
  const nav = renderNavigation(mainIndexJson.navigation);

  const categoryJson = await fetcher(`data/${type}/index.json`);

  const mainContent = el('main', {});
  categoryJson.content.forEach(({ title, text, link, url }, index) => {
    const section = el('section', {}, el('h2', {}, title), el('p', {}, text));

    if (link) {
      const linkAnchor = el(
        'a',
        {
          href: `?type=${type}&content=${url.split('.')[0]}`,
          class: 'view-link',
        },
        link
      );

      linkAnchor.addEventListener('click', (event) => {
        event.preventDefault();
        window.history.pushState({}, '', linkAnchor.href);
        renderContentPage(root, type, url.split('.')[0]);
      });

      section.appendChild(linkAnchor);
    }

    mainContent.appendChild(section);

    if (index < categoryJson.content.length - 1) {
      mainContent.appendChild(el('hr'));
    }
  });

  const footer = el('footer', {}, mainIndexJson.footer);
  root.append(header, nav, mainContent, footer);
}



