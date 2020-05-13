// export { default as ArticleLine } from './components/article-line';

import React from 'react';
import ReactDOM from 'react-dom';

import ArticleLine from './components/article-line';
import './scss/index.scss';

const list = [
  {
    id: 0,
    createTime: '2020-05-13',
    title: '数据列表的方式呈现',
    cover: 'https://cdn.compelcode.com/image/fe/react-lifecycle.png',
    intro: '前天，已将《野草》编定了；这回便轮到陆续载在《莽原》上的《旧事重提》，我还替他改了一个名称：《朝花夕拾》。带露折花，色香自然要好得多，但是我不能够。便是现在心目中的离奇和芜杂，我也还不能使他即刻幻化，转成离奇和芜杂的文章。或者，他日仰看流云时，会在我的眼前一闪烁罢。'
  }
]

ReactDOM.render(
  <React.StrictMode>
    <section>
      <ArticleLine>
        <ArticleLine.Year value={'2020'} />
        <ArticleLine.Month value={'5月'} />
        <ArticleLine.Item id={0} title={'带标题的文章'} />
        <ArticleLine.Item id={1} title={'带描述的文章'} intro={'我是一段描述信息'} />
        <ArticleLine.Item id={3} title={'带图片的文章'} cover="https://cdn.compelcode.com/image/fe/react-lifecycle.png"/>
      </ArticleLine>

      <ArticleLine list={list}></ArticleLine>
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);
