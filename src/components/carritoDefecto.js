import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function carritoDefecto() {
  return <Image source={require('../assets/logobus.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})