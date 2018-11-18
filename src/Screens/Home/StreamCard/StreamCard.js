import React from 'react'
import styled from '@emotion/native'
import {compose, mapProps} from 'recompose'
import Meta from './Meta'

export default function StreamCard ({stream, streamer, ...props}) {
  console.log('eh?', {stream, streamer})
  return (
    <Container {...props}>
      <StreamImage videoId={stream.liveData.videoId} />
      <Meta
        stream={stream}
        streamer={streamer}
      />
    </Container>
  )
}

const Container = styled.View({
  marginBottom: 20
})

const withStreamImgSrc = mapProps(({videoId, ...props}) => console.log(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`) || ({
  ...props,
  source: {uri: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
}))

const StreamImage = withStreamImgSrc(styled.Image({
  height: 200,
  marginBottom: 10
}));
