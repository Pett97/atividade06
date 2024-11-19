import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Button.style'

type buttonProps={
  title:string;
  onPress:()=>void;
}

function Button({title,onPress}:buttonProps) {
  return (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text} >{title}</Text>
  </TouchableOpacity>
  )
}

export default Button