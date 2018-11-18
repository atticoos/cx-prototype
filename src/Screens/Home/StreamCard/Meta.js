import React from 'react'
import styled from '@emotion/native'
import {Colors, Spacing} from '../../../Styles'

export default function Meta ({stream, streamer, ...props}) {
  return (
    <Container {...props}>
      <StreamerAvatar source={{uri: streamer.images.avatars.default.url}} />

      <InfoContainer>
        <StreamTitle numberOfLines={1}>{stream.liveData.title}</StreamTitle>
        <Row>
          <StreamerName>{streamer.name}</StreamerName>
          <ViewCount>{stream.liveData.viewers}</ViewCount>
        </Row>
      </InfoContainer>
    </Container>
  )
}

const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center'
})

const InfoContainer = styled.View({
  marginLeft: Spacing[3],
  flex: 1
})

const StreamerAvatar = styled.Image({
  height: 48,
  width: 48,
  borderRadius: 48
})

const StreamTitle = styled.Text({
  color: '#fff',
  flex: 1,
  fontSize: 18
})

const StreamerName = styled.Text({
  color: '#fff',
  fontSize: 16
})

const ViewCount = styled(StreamerName)({
  marginLeft: Spacing[2]
})

const Row = styled.View({
  flexDirection: 'row',
  alignItems: 'center'
})
