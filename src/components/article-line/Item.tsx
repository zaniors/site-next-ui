import React, { FC, CSSProperties } from 'react';

export interface IArticleLineItemProps {
  id: string | number;
  title: string;
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
    className,
    style
  } = props;

  return (
    <article className="zan-al-item">
      <a href="/" className="zan-al-item-content">
        <h2 className="zan-al-item-title">{title}</h2>
        <section className="zan-al-item-cover">
          <img src="https://redspite.com/uploads/1587477767089.jpg" alt="cover-img" />
        </section>
        {
          intro ? <p className="zan-al-item-intro">{intro}</p> : null
        }
      </a>
    </article>
  )
}
ArticleLineItem.displayName = 'ArticleLineItem';

export default ArticleLineItem;