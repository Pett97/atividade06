import React from "react";
import { Alert, Text, View, StyleSheet } from "react-native";
import FullScreen from "../../src/components/containers/FullScreen";
import HeaderWithTitle from "../../src/components/headers/HeaderWithTitle";
import { useLocalSearchParams } from 'expo-router'; 
import ProdutoView from "../../src/components/ProdutoView/ProdutoView";
import Scrollable from "../../src/components/Scrollable";

function TelaCarrinho() {
  const { valor, products } = useLocalSearchParams();
  const total: number = valor ? parseFloat(valor as string) : 0;
  const productList = products ? JSON.parse(products as string) : [];
  const handleCheckout = () => {
    Alert.alert('Compra Finalizada!');
  };

  return (
    <FullScreen>
      <HeaderWithTitle title="Carrinho" />
      <Scrollable>

        {productList.map((data: any) => (
          <ProdutoView
            key={data.id}
            imagePath={data.imagePath}
            nome={data.nome}
            preco={data.preco}
          />
        ))}
      </Scrollable>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total a Pagar: R$ {total.toFixed(2)}</Text>
      </View>

      <View style={styles.checkoutButton}>
        <Text style={styles.checkoutText} onPress={handleCheckout}>
          Finalizar Compra
        </Text>
      </View>
    </FullScreen>
  );
}

// Estilos
const styles = StyleSheet.create({
  totalContainer: {
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default TelaCarrinho;
