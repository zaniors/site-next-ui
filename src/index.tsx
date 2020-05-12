// export { default as ArticleLine } from './components/article-line';

import React from 'react';
import ReactDOM from 'react-dom';

import ArticleLine from './components/article-line';
import './scss/index.scss';
import TransArticleLine from './components/article-line/ArticleLine';

ReactDOM.render(
  <React.StrictMode>
    <section>
      <ArticleLine>
        <TransArticleLine.Year />
        <TransArticleLine.Month />
        <ArticleLine.Item id={0} title={'测试'} />
        <ArticleLine.Item id={0} title={'测试'} />
        <ArticleLine.Item id={0} title={'测试'} />
      </ArticleLine>
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);
