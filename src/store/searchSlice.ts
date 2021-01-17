import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    setItemsRequest: (state: ISearchState, action: PayloadAction<string>) => {
      state.term = action.payload
      state.isLoading = true
      state.items = []
      state.isFetched = true
    },
    setMoreItemsRequest: (state: ISearchState) => {
      state.isLoading = true
      state.fetchNumber = state.fetchNumber + 1
    },
    setItems: (state: ISearchState, action: PayloadAction<IItunesItem[]>) => {
      state.items = action.payload
      state.isLoading = false
    },
    setMoreItems: (state: ISearchState, action: PayloadAction<IItunesItem[]>) => {
      state.items = [...state.items, ...action.payload]
      state.isLoading = false
    },
  },
})

export default searchSlice.reducer
