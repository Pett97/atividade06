import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./ProdutoView.style";
import Preco from "../Preco/Preco";

type produtoProps= {
  imagePath:any,
  nome:string,
  preco:number
} 

function ProdutoView({imagePath,nome,preco}:produtoProps) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={imagePath}
          style={styles.image}>
          </Image>
      </View>

      <View style={styles.infoProduct}>
        <Text style={styles.productName}>{nome}</Text>
        <View style={styles.priceProduct}>
          <Preco preco={preco}></Preco>
          <Text>x1</Text>
        </View>
      </View>
    </View>
  );
}

export default ProdutoView;