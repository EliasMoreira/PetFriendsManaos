export class OutputTrainerDto {
  id: number;
  nome: string;
  preco: string;
  bairro: string;

  constructor(id: number, nome: string, preco: string, bairro: string) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.bairro = bairro;
  }
}
