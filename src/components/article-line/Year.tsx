import React, { FC } from 'react';

const ArticleLineYear: FC<{ value: string | number; }> = ({ value }) => {
  return (
    <section className="zan-al-year">
      <span>{value}</span>
    </section>
  )
}

ArticleLineYear.displayName = 'ArticleLineYear';

export default ArticleLineYear;