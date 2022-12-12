import classNames from 'classnames'
import React, { CSSProperties, FC } from 'react'
import transDateType from '../util/checkDateType'

export interface IArticleLineItemProps {
  id: string | number;
  title: string;
  createTime?: string;
  intro?: string;
  cover?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: (id: string | number) => void
}

const ArticleLineItem: FC<IArticleLineItemProps> = (props) => {
  const {
    id,
    title,
    intro,
    cover,
    createTime,
    className,
    style,
    onClick
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
        month = d.getMonth() + 1 + '';
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
      <section className={`${preClass}-content`} onClick={onClick?.bind(null, id)}>
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
      </section>
    </article>
  )
}
ArticleLineItem.displayName = 'ArticleLineItem';

export default ArticleLineItem;