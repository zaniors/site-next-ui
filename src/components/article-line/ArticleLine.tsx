import React, { FC } from 'react';

interface IArticleLineProps {

}

const ArticleLine: FC<IArticleLineProps> = (props) => {
  const {
    children
  } = props;
  return (
    <div>
      article line
      {children}
    </div>
  )
}

export default ArticleLine;