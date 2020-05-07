import ArticleLine, { IArticleLineProps } from './ArticleLine';
import Item, { IArticleLineItemProps } from './Item'
import { FC } from 'react';

type IArticleLine = FC<IArticleLineProps> & {
  Item: FC<IArticleLineItemProps>
};

const TransArticleLine = ArticleLine as IArticleLine;
TransArticleLine.Item = Item;

export default TransArticleLine;