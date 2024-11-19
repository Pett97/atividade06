import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { DEFAULT_GAP } from '../../constants/globalStyles';

type FullScreenProps = {
  children:ReactNode;
  center?:boolean;
};

function FullScreen({children,center= false}:FullScreenProps) {
  return (
    <View style={[styles.container,center?styles.center:undefined]}>
      {children}
    </View>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: DEFAULT_GAP * 2,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FullScreen