import React, { FC, CSSProperties, Fragment } from 'react';
import classNames from 'classnames';
import ArticleLineItem, { IArticleLineItemProps } from './Item';
import ArticleLineYear from './Year';
import ArticleLineMonth from './Month';
import transDateType from '../util/checkDateType';

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

  const preClass = 'zan-al';
  const classes = classNames(preClass, className);

  /**
   * 渲染子组件，两种情况
   * 1. 父组件有传递list数据，则通过list渲染ArticleLineItem组件
   * 2. 父组件直接嵌套ArticleLineYear、ArticleLineMonth、ArticleLineItem组件渲染出来
   */
  const renderChildren = () => {
    if (list && list.length > 0) {
      let year = 0, month = '';
      return list.map((props) => {
        if (props.createTime) {
          const d = transDateType(props.createTime) as Date;
          year = d.getFullYear();
          month = d.getMonth() + 1 + '月';
        }
        return <Fragment key={props.id}>
          {
            year ?
              <ArticleLineYear value={year} />
              : null
          }
          {
            month ?
              <ArticleLineMonth value={month} />
              : null
          }
          <ArticleLineItem {...props} />
        </Fragment>
      });
    }

    return React.Children.map(children, (child) => {
      const childElement = child as React.FunctionComponentElement<IArticleLineItemProps>;

      if (childElement.type.displayName === 'ArticleLineItem'
        || childElement.type.displayName === 'ArticleLineYear'
        || childElement.type.displayName === 'ArticleLineMonth') {
        return React.cloneElement(childElement);
      }
      throw new Error('ArticleLine组件不接受非ArticleLineItem组件作为子组件');

    });
  }

  return (
    <div className={classes} style={style} data-testid="test-al">
      {renderChildren()}
    </div>
  )
}

type IArticleLine = FC<IArticleLineProps> & {
  Year: FC<{ value: string | number; }>;
  Month: FC<{ value: string | number; }>;
  Item: FC<IArticleLineItemProps>;
};

const TransArticleLine = ArticleLine as IArticleLine;
TransArticleLine.Year = ArticleLineYear;
TransArticleLine.Month = ArticleLineMonth;
TransArticleLine.Item = ArticleLineItem;

export default TransArticleLine;