import classNames from 'classnames'
import React, { CSSProperties, FC } from 'react'
import transDateType from '../util/checkDateType'
import dateFormat from '../util/dateFormat'

export interface IArticleLineItemProps {
  id: string | number;
  title: string;
  createTime?: string;
  updateTime?: string;
  tag?: string[];
  category?: string[];
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
    updateTime,
    tag,
    category,
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
        <section className="text-content">
          {
            intro ? <p className="zan-al-item-intro ellipsis-4" data-testid="al-intro">{intro}</p> : null
          }
          {
            cover ?
              <section className="zan-al-item-cover" data-testid="al-cover">
                <img src={cover} alt="cover-img" />
              </section>
              : null
          }
        </section>
      </section>
      <section className="zan-al-extra-info">
        <section className="info">
          {
            createTime ?
              <section className="item-text"><i className="zanior zan-create-time"></i>{dateFormat(createTime)}</section>
              : null
          }
          {
            updateTime ?
              <section className="item-text"><i className="zanior zan-update-time"></i>{dateFormat(updateTime)}</section>
              : null
          }
          {
            tag && tag.length > 0 ?
              <section className="item-text">
                <i className="zanior zan-tag"></i>
                {
                  tag.map((item, index) => (<span>{item}{`${index + 1 === tag.length ? '' : '、'}`}</span>))
                }
              </section>
              : null
          }
          {
            category && category.length > 0 ?
              <section className="item-text">
                <i className="zanior zan-category"></i>
                {
                  category.map((item, index) => (<span>{item}{`${index + 1 === category.length ? '' : '、'}`}</span>))
                }
              </section>
              : null
          }
        </section>
        <section className="line"></section>
      </section>
    </article>
  )
}
ArticleLineItem.displayName = 'ArticleLineItem';

export default ArticleLineItem;