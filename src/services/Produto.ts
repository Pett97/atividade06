export default class Produto {
  private id?: number;
  private nome: string;
  private imagePath:string;
  private preco: number;

  constructor(nome: string,imagePath:string, preco: number,id?: number) {
    this.id = id;
    this.imagePath = imagePath;
    this.nome = nome;
    this.preco = preco;
  }

  public getID(): number | undefined {
    return this.id;
  }

  public getImagePath():string{
    return this.imagePath;
  }

  public getNome(): string {
    return this.nome;
  }

  public getPreco(): number {
    return this.preco;
  }
}
