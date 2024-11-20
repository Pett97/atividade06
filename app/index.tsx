import Scrollable from "../src/components/Scrollable";
import ProdutoView from "../src/components/ProdutoView/ProdutoView";
import Carrinho from "../src/services/Carrinho";
import Produto from "../src/services/Produto";
import {router } from "expo-router";
import {TouchableOpacity } from "react-native";
import FullScreen from "../src/components/containers/FullScreen";
import HeaderWithTitle from "../src/components/headers/HeaderWithTitle";
import Button from "../src/components/button/Button";

interface ProdutoInterface {
  id:number,
  imagePath: string;
  nome: string;
  preco: number;
}

const list: ProdutoInterface[] = [
  {
    id:1,
    nome: "Computador ",
    imagePath: require("../src/assets/pc.jpg"),
    preco: 1500,
  },
  {
    id:2,
    nome: "Mouse sem Fio ",
    imagePath: require("../src/assets/mouse.jpg"),
    preco: 100,
  },
  {
    id:3,
    nome: "teclado retroilumiado ",
    imagePath: require("../src/assets/keyboard.jpg"),
    preco: 200,
  },
  {
    id:4,
    nome: "Mouse sem Fio 2  ",
    imagePath: require("../src/assets/mouse.jpg"),
    preco: 100,
  },
  {
    id:5,
    nome: "Mouse sem Fio 3  ",
    imagePath: require("../src/assets/mouse.jpg"),
    preco: 100,
  },
  {
    id:6,
    nome: "Mouse sem Fio 4",
    imagePath: require("../src/assets/mouse.jpg"),
    preco: 100,
  },
];

export default function App() {
  const carrinho = new Carrinho();

  const handleCheckout = ()=>{
    const valorTotal:number = carrinho.getValorTotal();
    const todososProdutos:Produto[] = carrinho.getTodosOsProdutos();
    router.push({
      pathname:"/telaCarrinho/telaCarrinho",
      params:{
        valor:valorTotal.toString(),
        products:JSON.stringify(todososProdutos)
      }
    });

  };

  const handleCreateProduct = (nome: string,imagePath:string, preco: number)=>{
    let id = carrinho.gerarID();
    carrinho.addNovoProduto(nome,imagePath,preco);

    console.log(carrinho.getTodosOsProdutos());
  }
  return (
   <FullScreen>
    <HeaderWithTitle title="Produtos"/>
     <Scrollable>
      {list.map((data) => (
          <TouchableOpacity key={data.id} onPress={()=>handleCreateProduct(data.nome,data.imagePath,data.preco)}>
            <ProdutoView
            key={data.id}
            imagePath={data.imagePath}
            nome={data.nome}
            preco={data.preco}
          />
          </TouchableOpacity>
      ))}
    </Scrollable>
    <Button title="Carrinho" onPress={handleCheckout} ></Button>
   </FullScreen>
  );
}