import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(185, 185, 185, 0.5);
  z-index: 9999;
  cursor: pointer;
`

export const InternalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(185, 185, 185, 0.5);
  z-index: 9999;
  cursor: pointer;
`