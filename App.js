import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FullStreamers from './src/Providers/Cx/FullStreamers';
import HomeScreen from './src/Screens/Home';

export default class App extends React.Component {
  render() {
    return <HomeScreen />
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <FullStreamers>
          {api => console.log('api', api) || null}
        </FullStreamers>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
