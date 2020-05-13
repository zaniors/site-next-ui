import React from 'react';
import ArticleLine from './ArticleLine';
import { render } from '@testing-library/react';
import { IArticleLineItemProps } from './Item';

describe('测试ArticleLine组件', () => {
  it('测试初始组件带有List数据', () => {
    const list: IArticleLineItemProps[] = [
      {
        id: 0,
        createTime: '2020-05-13',
        title: 'React生命周期',
        cover: 'https://cdn.compelcode.com/image/fe/react-lifecycle.png',
        intro: '不管学习任何框架，掌握框架的生命周期函数，才知道组件在某一时刻在执行什么任务'
      }
    ];
    const { getByTestId } = render(<ArticleLine list={list} />);
    const alWrap = getByTestId('test-al');
    expect(alWrap).toHaveClass('zan-al');

    let childElementCount = 0;
    list.filter(item => item.createTime).map(item => {
      // add Year & Month Element
      childElementCount += 2;
      return item;
    });
    childElementCount += list.length;
    expect(alWrap.childElementCount).toEqual(childElementCount);

    const alTitle = getByTestId('al-title');
    expect(alWrap).toContainElement(alTitle);
    
    const alCover = getByTestId('al-cover');
    expect(alWrap).toContainElement(alCover);

    const alIntro = getByTestId('al-intro');
    expect(alWrap).toContainElement(alIntro);
  });

  it('测试初始组件嵌套ArticleLineItem子组件', () => {
    const generateAL = () => {
      return (
        <ArticleLine>
          <ArticleLine.Item id={0} title="我是第1条测试数据" />
          <ArticleLine.Item id={0} title="我是第2条测试数据" />
        </ArticleLine>
      );
    }

    const { getByTestId } = render(generateAL());
    const alWrap = getByTestId('test-al');
    expect(alWrap).toHaveClass('zan-al');
    expect(alWrap.childElementCount).toEqual(2);
  });
});