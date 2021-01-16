import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin: 10px auto;
  justify-content: center;
`

export const SearchButton = styled.button`
  width: 100px;
`

export const ClearButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: baseline;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 4px;
  margin-right: 8px;
  width: 200px;
`

export const Input = styled.input`
  border: 0;
  width: 100%;
  font-size: 16px;
  outline: transparent;
`
