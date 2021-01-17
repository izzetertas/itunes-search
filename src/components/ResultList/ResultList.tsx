import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import { searchSelector } from '../../store/selectors'
import { fetchMoreItems } from '../../store/searchAction'

import SearchInput from '../SearchInput'
import SearchResultItem from '../SearchResultItem'

import { Items, NotFound } from './ResultList.styled'

const ResultList = () => {
  const dispatch = useDispatch()
  const searchState = useSelector(searchSelector)

  useInfiniteScroll(() => {
    dispatch(fetchMoreItems(searchState))
  })

  const notFound = (searchState.isFetched && !searchState.isLoading && !searchState.items.length)

  return (
    <div>
      <SearchInput />
      {notFound &&
        <NotFound>No records found!</NotFound>
      }
      {searchState.items.length > 0 &&
        <Items>
          {searchState.items.map(item => (
            <SearchResultItem key={item.trackId} {...item} />
          ))}
        </Items>
      }
    </div>
  )
}

export default ResultList