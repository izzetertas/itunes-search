import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { searchSelector } from '../../store/selectors'
import { fetchItems } from '../../store/searchAction'

import {
  Wrapper,
  SearchButton,
  Input,
  InputContainer,
  ClearButton,
} from './SearchInput.styled'

const SearchInput = () => {
  const dispatch = useDispatch()
  const searchState = useSelector(searchSelector)
  const [term, setTerm] = useState(searchState.term || '')

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && term.length) {
      handleSubmit()
    }
  }

  const handleClear = () => {
    setTerm('')
  }

  const handleSubmit = () => {
    dispatch(fetchItems(term))
  }

  return (
    <Wrapper>
      <InputContainer>
        <Input
          ref={input => input && input.focus()}
          value={term}
          onChange={handleSearchTermChange}
          onKeyPress={handleKeyPress}
        />
        {term &&
          <ClearButton
            aria-label='Clear'
            onClick={handleClear}
          >
            X
           </ClearButton>
        }
      </InputContainer>
      <SearchButton
        aria-label='Search'
        disabled={searchState.isLoading || !term.length}
        onClick={handleSubmit}
      >
        Search
        </SearchButton>
    </Wrapper>
  )
}

export default SearchInput