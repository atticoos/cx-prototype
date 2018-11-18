import React from 'react'
import styled from '@emotion/native'
import ScreenHeader from './ScreenHeader'
import {Colors} from '../../Styles'

export default function Screen ({children, viewerCount, ...props}) {
  return (
    <Container {...props}>
      <ScreenHeader viewerCount={viewerCount} />
      {children}
    </Container>
  )
}

const Container = styled.View({
  backgroundColor: Colors.GRAY,
  flex: 1
})

const ScreenContent = Screen.Content = styled.View({
  paddingHorizontal: 20,
  flex: 1
})
