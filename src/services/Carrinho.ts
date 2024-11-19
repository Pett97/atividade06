import Produto from "./Produto";
export default class Carrinho{
   lista:Produto[] = [];

  public gerarID():number{
    return this.lista.length+1;
  }

  public addNovoProduto(nome: string,imagePath:string, preco: number):void{
    let id = this.gerarID();
    let produto = new Produto(nome,imagePath, preco,id);

    try {
      this.lista.push(produto);
    } catch (error) {
      console.log(error);
    }
  }

  public getTodosOsProdutos():Produto[]{
    return this.lista;
  }

  public getValorTotal():number{
    let valor:number = 0;
    this.lista.forEach((p)=>{
      valor+=p.getPreco();
    });

    return valor;
  }
}