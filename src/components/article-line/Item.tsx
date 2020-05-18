import React, { FC, CSSProperties } from 'react';
import classNames from 'classnames';
import transDateType from '../util/checkDateType';

export interface IArticleLineItemProps {
  id: string | number;
  title: string;
  createTime?: string;
  intro?: string;
  cover?: string;
  className?: string;
  style?: CSSProperties;
}

const ArticleLineItem: FC<IArticleLineItemProps> = (props) => {
  const {
    title,
    intro,
    cover,
    createTime,
    className,
    style
  } = props;
  const preClass = 'zan-al-item';
  const classes = classNames(preClass, className);

  const createAlDate = () => {
    if (createTime && transDateType(createTime)) {
      const d = transDateType(createTime) as Date;
      let month = '';
      if (d.getMonth() < 9) {
        month = '0' + (d.getMonth() + 1);
      } else {
        month = d.getMonth() + '';
      }

      return (
        <span className="zan-al-item-date">
          {month}-{d.getDate()}
        </span>
      )
    }
    return null;
  }

  return (
    <article className={classes} style={style}>
      <a href="/" className={`${preClass}-content`}>
        <h2 className="zan-al-item-title ellipsis" data-testid="al-title">
          {createAlDate()}
          {title}
        </h2>
        {
          cover ?
            <section className="zan-al-item-cover" data-testid="al-cover">
              <img src={cover} alt="cover-img" />
            </section>
            : null
        }
        {
          intro ? <p className="zan-al-item-intro ellipsis-2" data-testid="al-intro">{intro}</p> : null
        }
      </a>
    </article>
  )
}
ArticleLineItem.displayName = 'ArticleLineItem';

export default ArticleLineItem;