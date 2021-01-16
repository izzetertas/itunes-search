import React from 'react'
import { IItunesItem } from '../../store/searchSlice'

import { Content, Image, Wrapper } from './SearchResultItem.styled'

export interface ISearchResultItemProps extends IItunesItem { }

const SearchResultItem: React.FC<ISearchResultItemProps> = (props) => (
  <Wrapper>
    <Image src={props.imageUrl} alt={props.trackName} />
    <Content>
      <div>{props.artistName}</div>
      <div>{props.trackName}</div>
      <div>{props.trackPrice}  {props.currency}</div>
    </Content>
  </Wrapper>
)

const areEquals = (prevProps: ISearchResultItemProps, nextProps: ISearchResultItemProps) => (
  prevProps.trackId === nextProps.trackId)

const MemoizedSearchResultItem = React.memo(SearchResultItem, areEquals)

export default MemoizedSearchResultItem