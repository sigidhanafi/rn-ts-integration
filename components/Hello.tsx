import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export interface Props {
  name: String
  level?: number
  onIncrement?: () => void
  onDecrement?: () => void
}

interface State {
  level: number
}

export default class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      level: props.level || 1
    }
  }

  onIncrement = () => {
    this.setState({ level: this.state.level + 1 })
  }

  onDecrement = () => {
    this.setState({ level: this.state.level - 1 })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, {this.props.name}</Text>
        <Text>Your level: {this.state.level}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.button} onPress={this.onDecrement}>
            <Text style={styles.fontIcon}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onIncrement}>
            <Text style={styles.fontIcon}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    height: 80,
    backgroundColor: 'green',
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontIcon: {
    fontSize: 40,
    color: 'white'
  }
})
