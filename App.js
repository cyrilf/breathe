import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

import Canvas from './app/components/Canvas'

const renderCanvas = (canvas) => {
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

const { width, height } = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Canvas
          context={{message: 'Hello!'}}
          render={renderCanvas}
          style={{width, height}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
