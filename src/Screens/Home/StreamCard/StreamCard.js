import React from 'react'
import {WebView} from 'react-native'
import styled from '@emotion/native'
import {compose, mapProps} from 'recompose'
import Meta from './Meta'
import VideoPlayer from '../../../Components/VideoPlayer'

export default function StreamCard ({stream, streamer, playInline, ...props}) {
  return (
    <Container {...props}>
      {playInline ? (
        <VideoPlayer videoId={stream.liveData.videoId} />
      ) : (
        <StreamImage videoId={stream.liveData.videoId} />
      )}
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

const streamUrlForVideoId = videoId => `https://gaming.youtube.com/embed/${videoId}/?autoplay=1&controls=0&showinfo=0&modestbranding=1&autohide=1&mute=1`
