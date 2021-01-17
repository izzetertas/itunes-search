import axios from 'axios'

import { IItunesItem } from '../../store/searchSlice'

interface IItunesResponse {
  artistName: string
  trackId: string
  trackName: string
  imageUrl: string
  trackPrice: number
  currency: string
  artworkUrl100: string
}

class ITunesService {
  private baseApi = 'https://itunes.apple.com'

  getItems = async (term: string, offset = 0, limit = 10) => {
    return axios.get(`${this.baseApi}/search?term=${term}&entity=musicVideo&offset=${offset}&limit=${limit}`)
      .then(response => {
        const result: IItunesItem[] = response.data.results.map((item: IItunesResponse) => ({
          imageUrl: item.artworkUrl100,
          artistName: item.artistName,
          trackId: item.trackId,
          trackName: item.trackName,
          trackPrice: item.trackPrice,
          currency: item.currency,
        }))
        return result
      })
  }
}

export default new ITunesService()