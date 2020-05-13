import React, { FC } from 'react';

const ArticleLineMonth: FC<{ value: string | number; }> = ({ value }) => {
  return (
    <section className="zan-al-month">
      <span> {value}</ span>
    </section>
  )
}

ArticleLineMonth.displayName = 'ArticleLineMonth';

export default ArticleLineMonth;