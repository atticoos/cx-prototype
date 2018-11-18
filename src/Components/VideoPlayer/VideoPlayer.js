import React from 'react'
import {WebView} from 'react-native'


export default function VideoPlayer({videoId}) {
  return (
    <WebView
      scalesPageToFit={true}
      allowsInlineMediaPlayback={true}
      mediaPlaybackRequiresUserAction={false}
      source={{ html: htmlForVideo(videoId)}}
      style={{
        alignSelf: 'stretch',
        height: 200,
        backgroundColor: 'transparent'
      }}
    />
  )
}

const htmlForVideo = videoId => `
<html>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
<head>
  <script src="https://www.youtube.com/iframe_api"></script>
</head>
<body style="background-color:transparent;">
<div class="mask">
  <div id="player" style="height:300px;width:100%;">Player</div>
</div>
<style>
.mask {
  overflow: hidden;
  height: 170px;
}
.mask #player {
  margin-top: -68px;
}
</style>
<script>
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: '${videoId}',
      playerVars: {
        autoplay: 1,
        // fs: 0,
        playsinline: 1,
        modestbranding: 1,
        enablejsapi: 1,
        controls: 0,

      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {

  }
  function stopVideo() {
    player.stopVideo();
  }

  // window.onload = onYouTubeIframeAPIReady
  // setTimeout(onYouTubeIframeAPIReady, 2000)
</script>
</body>
</html>
`;
