import React from 'react'
import { useSelector } from 'react-redux'

import Loading from '../../components/Loading'
import ResultList from '../../components/ResultList'

import { searchLoadingSelector } from '../../store/selectors'

import { Wrapper, Header } from './HomePage.styled'

const HomePage = () => {
  const isLoading = useSelector(searchLoadingSelector)

  return (
    <>
      {isLoading && <Loading />}
      <Wrapper>
        <img src='/logo.svg' alt='itunes logo' />
        <Header>
          Itunes Search
        </Header>
        <ResultList />
      </Wrapper>
    </>
  )
}

export default HomePage
