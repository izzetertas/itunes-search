import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import iTunesService from '../services/itunesService'

import { AppThunk, RootState } from './index'

export interface IItunesItem {
  artistName: string
  trackId: string
  trackName: string
  imageUrl: string
  trackPrice: number
  currency: string
}

export interface ISearchState {
  isLoading?: boolean
  isFetched?: boolean
  term: string
  items: Readonly<IItunesItem>[]
  fetchNumber: number
  fetchSize: number
}

export const initialState: ISearchState = {
  items: [],
  term: '',
  fetchNumber: 0,
  fetchSize: 10,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setItemsRequest: (state, action: PayloadAction<any>) => {
      state.term = action.payload
      state.isLoading = true
      state.items = []
      state.isFetched = true
    },
    setMoreItemsRequest: (state) => {
      state.isLoading = true
      state.fetchNumber = state.fetchNumber + 1
    },
    setItems: (state, action: PayloadAction<any>) => {
      state.items = action.payload
      state.isLoading = false
    },
    setMoreItems: (state, action: PayloadAction<any>) => {
      state.items = [...state.items, ...action.payload]
      state.isLoading = false
    },
  },
})

export const {
  setItems, setItemsRequest, setMoreItems, setMoreItemsRequest,
} = searchSlice.actions

export default searchSlice.reducer
