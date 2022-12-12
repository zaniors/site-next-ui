import classNames from 'classnames'
import React, { CSSProperties, FC, Fragment } from 'react'
import transDateType from '../util/checkDateType'
import ArticleLineItem, { IArticleLineItemProps } from './Item'
import ArticleLineMonth from './Month'
import ArticleLineYear from './Year'

export interface IArticleLineProps {
  list?: IArticleLineItemProps[];
  className?: string;
  style?: CSSProperties;
}

export const ArticleLine: FC<IArticleLineProps> = (props) => {
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
      return list.map((props, index) => {

        if (props.createTime) {
          // 保存上个item，与当前对比，如果是一样的，则隐藏年份
          const prevItem = list[index - 1]
          const prevDate = prevItem ? transDateType(prevItem.createTime!) as Date : null;

          const d = transDateType(props.createTime) as Date;
          month = d.getMonth() + 1 + '月';
          year = d.getFullYear() !== prevDate?.getFullYear() ? d.getFullYear() : 0
        }
        return <Fragment key={props.id}>
          {
            year ? <ArticleLineYear value={year} /> : null
          }
          {
            month ? <ArticleLineMonth value={month} /> : null
          }
          <ArticleLineItem {...props} />
        </Fragment>
      });
    }

    return React.Children.map(children, (child) => {
      const childElement = child as React.FunctionComponentElement<IArticleLineItemProps>;

      switch (childElement.type.displayName) {
        case 'ArticleLineItem':
        case 'ArticleLineYear':
        case 'ArticleLineMonth':
          return React.cloneElement(childElement);
      }
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