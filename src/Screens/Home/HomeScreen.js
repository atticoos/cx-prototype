import React from 'react'
import styled from '@emotion/native'
import {ScrollView} from 'react-native'
import {compose, mapProps} from 'recompose'
import Screen from '../../Components/Screen'
import StreamCard from './StreamCard'
import {withFullStreamers} from '../../Providers/Cx/FullStreamers'
import {withLiveStreamers} from '../../Providers/Cx/LiveStreamers'

export function HomeScreen ({live, offline, viewerCount, ...props}) {
  return (
    <Screen viewerCount={viewerCount}>
      <ScrollView>
        <Screen.Content>
          <SectionHeading>Live</SectionHeading>
          {live.map(({stream, streamer}) => (
            <StreamCard
              key={streamer.id}
              stream={stream}
              streamer={streamer}
            />
          ))}
        </Screen.Content>
      </ScrollView>
    </Screen>
  )
}
const SectionHeading = styled.Text({
  color: 'white',
  fontSize: 24,
  marginVertical: 18
})

const propsFromProviders = mapProps(({liveStreamers: liveStreamersData, fullStreamers: fullStreamersData, ...props}) => {
  let featured = null
  let live = []
  let offline = []
  let viewerCount = 0
  let loading = liveStreamersData.loading || fullStreamersData.loading

  if (!loading) {
    const liveStreams = liveStreamersData.data.streamers;
    const streamers = fullStreamersData.data.streamers;

    live = liveStreams.map(stream => ({
      stream,
      streamer: streamers.find(streamer => streamer.id === stream.streamer)
    })).sort((a, b) => b.stream.liveData.viewers - a.stream.liveData.viewers)

    offline = streamers.filter(streamer => !liveStreams.find(stream => streamer.id === stream.streamer))

    viewerCount = live.reduce((acc, {stream}) => acc + stream.liveData.viewers, 0)
  }

  return {
    featured,
    live,
    offline,
    viewerCount,
    loading,
    ...props
  }
})

const connect = compose(
  withLiveStreamers,
  withFullStreamers,
  propsFromProviders
)

export default connect(HomeScreen)
