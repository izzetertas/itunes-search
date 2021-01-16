import React from 'react'
import { PropagateLoader } from 'react-spinners'

import { Wrapper } from './Loading.styled'

export const Loading = React.memo(() => (
  <Wrapper>
    <PropagateLoader size={20} color='#4d9aff' />
  </Wrapper>
))

Loading.displayName = 'Loading'

export default Loading
