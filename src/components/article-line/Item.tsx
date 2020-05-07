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
    <div className="zan-al-item">
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  )
}
ArticleLineItem.displayName = 'ArticleLineItem';

export default ArticleLineItem;