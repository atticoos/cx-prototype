import React from 'react'
import {WebView} from 'react-native'
import styled from '@emotion/native'
import {compose, mapProps} from 'recompose'
import Meta from './Meta'
import VideoPlayer from '../../../Components/VideoPlayer'

export default function StreamCard ({stream, streamer, ...props}) {
  console.log('eh?', {stream, streamer})
  return (
    <Container {...props}>
      <StreamImage videoId={stream.liveData.videoId} />
      <VideoPlayer videoId={stream.liveData.videoId} />
      {/* <WebView
        scalesPageToFit={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        source={{ html: '<html><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><iframe src="https://www.youtube.com/embed/' + stream.liveData.videoId + '?modestbranding=1&playsinline=1&showinfo=0&rel=0" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></html>'}}
        style={{alignSelf: 'stretch', height: 300}}
      /> */}
      {/* <WebView
        source={{uri: streamUrlForVideoId(stream.liveData.videoId)}}
        style={{alignSelf: 'stretch', height: 300}}
        allowsInlineMediaPlayback
      /> */}
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
