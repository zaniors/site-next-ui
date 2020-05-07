import React, { FC, CSSProperties } from 'react';
import classNames from 'classnames';
import ArticleLineItem, { IArticleLineItemProps } from './Item';

export interface IArticleLineProps {
  list?: IArticleLineItemProps[];
  className?: string;
  style?: CSSProperties;
}

const ArticleLine: FC<IArticleLineProps> = (props) => {
  const {
    list,
    className,
    style,
    children
  } = props;

  const prefixClasses = 'zan-al';

  /**
   * 渲染子组件，两种情况
   * 1. 父组件有传递list数据，则通过list渲染ArticleLineItem组件
   * 2. 父组件直接嵌套ArticleLineItem组件渲染出来
   */
  const renderChildren = () => {
    if (list && list.length > 0) {
      return list.map((props) => (
        <ArticleLineItem key={props.id} {...props} />
      ));
    }

    return React.Children.map(children, (child) => {
      const childElement = child as React.FunctionComponentElement<IArticleLineItemProps>;
      if (childElement.type.displayName === 'ArticleLineItem') {
        return React.cloneElement(childElement);
      }
      console.error('ArticleLine组件不接受非ArticleLineItem组件作为子组件');
    });
  }

  return (
    <div className="zan-al" data-testid="test-al">
      {renderChildren()}
    </div>
  )
}

export default ArticleLine;