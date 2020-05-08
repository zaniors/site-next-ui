import React from 'react';
import ArticleLine from './ArticleLine';
import { render } from '@testing-library/react';

describe('测试ArticleLine组件', () => {
  it('测试初始组件带有List数据', () => {
    const list = [
      {
        id: 0,
        title: '我是第1条测试数据'
      },
      {
        id: 1,
        title: '我是第2条测试数据'
      },
    ];
    const { getByTestId } = render(<ArticleLine list={list} />);
    const alWrap = getByTestId('test-al');
    expect(alWrap).toHaveClass('zan-al');
    expect(alWrap.childElementCount).toEqual(list.length);
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