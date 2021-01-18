import React from 'react'
import { act, fireEvent, screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../store'

import itunesService from '../../services/itunesService'

import HomePage from './HomePage'

describe('<HomePage />', () => {
  describe('when search an artist', () => {
    test('should render result expected', async () => {
      const spyDeviceListService = jest.spyOn(itunesService, 'getItems')
        .mockImplementationOnce(() => Promise.resolve([{
          imageUrl: 'url',
          artistName: 'Joe featuring Papoose',
          trackId: '492323',
          trackName: 'I Wanna Know',
          trackPrice: 1.99,
          currency: 'USD'
        }]))
      const { getByText } = render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      )

      expect(getByText(/Itunes Search/i)).toBeInTheDocument()

      const input = screen.getByTestId('search-input')
      const inputValue = 'Joe'

      fireEvent.change(input, { target: { value: inputValue } })

      expect(input.value).toEqual(inputValue)

      const searchButton = getByText('Search')
      act(() => {
        fireEvent.click(searchButton)
      })
      await screen.findByText('I Wanna Know')
      screen.findByText('1.99 USD')
      screen.findByText('Joe featuring Papoose')

      expect(spyDeviceListService).toHaveBeenCalledWith('Joe', 0, 10)
      spyDeviceListService.mockClear()
    })
  })
})
