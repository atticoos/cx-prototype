import React from 'react';

const ENDPOINT = 'https://api-production.iceposeidon.com/streamers/live';

export default class LiveStreamersProvider extends React.Component {
  state = {
    data: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    this.setState({loading: true})
    return fetch(ENDPOINT).then(resp => resp.json())
      .then(data => this.setState({data}))
      .catch(error => this.setState({error}))
      .then(() => this.setState({loading: false}))
  }

  render() {
    return this.props.children(this.state);
  }
}

export const withLiveStreamers = WrappedComponent => props => (
  <LiveStreamersProvider>
    {api => <WrappedComponent liveStreamers={api} {...props} />}
  </LiveStreamersProvider>
)
