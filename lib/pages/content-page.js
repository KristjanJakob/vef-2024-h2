import { el } from '../elements.js';

export function renderContentPage(root, indexJson, contentJson) {
  root.innerHTML = ''; // Clear existing content

  const header = el('header', {}, el('h1', {}, indexJson.title));
  const main = el('main', {});

  contentJson.lectures.forEach(({ title, content }) => {
    const lectureSection = el('section', {}, el('h2', {}, title));

    content.forEach(({ type, data }) => {
      let element;
      if (type === 'text') {
        element = el('p', {}, data);
      } else if (type === 'heading') {
        element = el('h3', {}, data);
      } else if (type === 'list') {
        const ul = el('ul');
        data.forEach((item) => ul.appendChild(el('li', {}, item)));
        element = ul;
      }
      lectureSection.appendChild(element);
    });

    main.appendChild(lectureSection);
  });

  const footer = el('footer', {}, indexJson.footer);
  root.append(header, main, footer);
}

