import React from 'react'
import {
  StyleSheet, 
  Text, 
  View 
} from 'react-native'
import RoootNavigator from './src/navigations/RootNavigator';

import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <RoootNavigator />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App


