import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Canvas from './app/components/Canvas'

const renderCanvas = (canvas) => {
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Yo maeen! Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Canvas
          context={{message: 'Hello!'}}
          render={renderCanvas}
          style={{height: 200, width: 200}}
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
  },
  text: {
    color: 'white',
  }
})
