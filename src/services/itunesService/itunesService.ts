import axios from 'axios'

import { IItunesItem } from '../../store/searchSlice'

class ITunesService {
  getItems = async (term: string, offset = 0, limit = 10) => {
    return axios.get(`https://itunes.apple.com/search?term=${term}&entity=musicVideo&offset=${offset}&limit=${limit}`)
      .then(response => {
        const result: IItunesItem[] = response.data.results.map((item: any) => ({
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