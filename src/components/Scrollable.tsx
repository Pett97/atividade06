import React, { ReactNode } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DEFAULT_GAP, DEFAULT_PADDING } from '../constants/globalStyles';

type ScrollableProps={
  children:ReactNode;
}

function Scrollable({ children }: ScrollableProps) {
  return (
    <ScrollView>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:DEFAULT_PADDING,
    gap:DEFAULT_GAP * 2
  }
});

export default Scrollable