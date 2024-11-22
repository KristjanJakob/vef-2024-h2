import { el } from '../elements.js';
import { fetcher } from '../fetcher.js';

export async function renderContentPage(root, category, contentType) {
  root.innerHTML = '';

  const contentJson = await fetcher(`data/${category}/${contentType}.json`);

  const header = el('header', {}, el('h1', {}, contentJson.title));

  const backButton = el('button', { class: 'back-button' }, 'Til baka');
  backButton.addEventListener('click', () => {
    window.history.back();
  });

  const mainContent = el('main', {});

  if (contentJson.lectures) {
    contentJson.lectures.forEach((lecture) => {
      const lectureSection = el(
        'section',
        {},
        el('h3', {}, lecture.title),
        ...lecture.content.map((item) => {
          switch (item.type) {
            case 'heading':
              return el('h4', {}, item.data);
            case 'text':
              return el('p', {}, item.data);
            case 'quote':
              const quote = el('blockquote', {}, item.data);
              if (item.attribute) {
                quote.appendChild(el('cite', {}, ` - ${item.attribute}`));
              }
              return quote;
            case 'image':
              return el(
                'figure',
                {},
                el('img', { src: item.data, alt: item.caption || 'Image' }),
                item.caption ? el('figcaption', {}, item.caption) : null
              );
            case 'list':
              return el(
                'ul',
                {},
                ...item.data.map((listItem) => el('li', {}, listItem))
              );
            case 'code':
              return el('pre', {}, el('code', {}, item.data));
            default:
              return el('p', {}, 'Unknown content type');
          }
        })
      );
      mainContent.appendChild(lectureSection);
    });
  }

  if (contentJson.keywords) {
    const keywordsSection = el('section', {}, el('h2', {}, 'Lykilhugtök'));
    contentJson.keywords.forEach((keyword) => {
      const keywordItem = el(
        'div',
        { class: 'keyword' },
        el('h3', {}, keyword.title),
        keyword.english ? el('p', {}, `English: ${keyword.english}`) : null,
        el('p', {}, keyword.content)
      );
      keywordsSection.appendChild(keywordItem);
    });
    mainContent.appendChild(keywordsSection);
  }

  if (contentJson.questions) {
    contentJson.questions.forEach((questionObj) => {
      const questionContainer = el('section', {}, el('h3', {}, questionObj.question));

      const form = el('form', {});
      questionObj.answers.forEach((answer, index) => {
        const id = `${questionObj.question}-${index}`; 

        const input = el('input', {
          type: 'radio',
          name: questionObj.question,
          id: id,
          value: answer.correct, 
        });

        const label = el('label', { for: id }, answer.answer);
        const answerWrapper = el('div', {}, input, label);

        form.appendChild(answerWrapper);
      });

      const submitButton = el('button', { type: 'button' }, 'Svara');
      submitButton.addEventListener('click', () => {
        const selected = form.querySelector('input[type="radio"]:checked');
        if (selected) {
          const isCorrect = selected.value === 'true';
          alert(isCorrect ? 'Rétt!' : 'Rangt.');
        } else {
          alert('Veldu valmöguleika!');
        }
      });

      form.appendChild(submitButton);
      questionContainer.appendChild(form);
      mainContent.appendChild(questionContainer);
    });
  }

  const footer = el('footer', {}, contentJson.footer || '');

  root.append(header, backButton, mainContent, footer);
}