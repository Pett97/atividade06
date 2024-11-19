import React from 'react'
import { Stack } from 'expo-router'
function HeaderHidden() {
  return (
    <Stack.Screen options={{headerShown:false}}></Stack.Screen>
  )
}

export default HeaderHidden