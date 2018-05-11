/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Hello from './components/Hello'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Hello name={1} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
})
