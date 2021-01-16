import iTunesService from '../services/itunesService'

import { AppThunk } from './index'

import { initialState, searchSlice, ISearchState } from './searchSlice'

export const {
  setItems, setItemsRequest, setMoreItems, setMoreItemsRequest,
} = searchSlice.actions


export const fetchItems = (term: string): AppThunk => dispatch => {
  dispatch(setItemsRequest(term))

  iTunesService.getItems(term, 0, initialState.fetchSize)
    .then(response => {
      dispatch(setItems(response))
    })
    .catch(err => {
      dispatch(setItems([]))
    })
}

export const fetchMoreItems = (state: ISearchState): AppThunk => dispatch => {
  dispatch(setMoreItemsRequest())

  // api respondes so fast :) I want to show loading page when it's loaded. 
  // That's why I added timeout
  setTimeout(() => {
    iTunesService.getItems(state.term, state.fetchNumber + 1, state.fetchSize)
      .then(response => {
        dispatch(setMoreItems(response))
      })
      .catch(err => {
        dispatch(setItems([]))
      })
  }, 1000)
}


