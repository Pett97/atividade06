import React from "react";
import { Text, View } from "react-native";
import styles from "./Preco.style";
type precoProps={
  preco:number
}

function Preco({preco}:precoProps) {
  return <View>
    <Text style={styles.text}>R$ {preco}</Text>
  </View>;
}

export default Preco;