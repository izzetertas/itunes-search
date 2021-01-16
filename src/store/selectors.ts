import { createSelector } from 'reselect'

import { RootState } from './index'

const searchStateSelector = (state: RootState) => state

export const selectSearchState = (state: RootState) => state.search

export const searchSelector = createSelector(
  searchStateSelector,
  state => state.search,
)

export const searchLoadingSelector = createSelector(
  searchStateSelector,
  state => state.search.isLoading,
)
