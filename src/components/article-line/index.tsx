import ArticleLine from './ArticleLine';
import Item from './Item'
import { FC } from 'react';

type IArticleLine = FC & {
  Item: FC
};

const TransArticleLine = ArticleLine as IArticleLine;
TransArticleLine.Item = Item;

export default TransArticleLine;