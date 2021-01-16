import styled from 'styled-components'

export const Image = styled.img`
  display: block;
`

export const Content = styled.div`
  margin-left: 16px;
  font-size: 16px;
  text-align: left;

  div {
    margin-bottom: 8px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 12px;
  margin: 16px;

  border: 1px solid #efecec;
  box-shadow: 10px 10px 5px -9px #efecec;

  img {
    width: 120px;
    height: 100px;
    object-fit: fill;
  }
`