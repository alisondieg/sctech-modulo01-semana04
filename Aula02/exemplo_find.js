/*
const produtos = ["Camiseta", "Tenis", "Calça1",  "Boné"];
const tenis = produtos.find(produto =>{ return produto === "Tenis";}); // Dentro de produtos encontra o produto tenis
if(tenis) {
    console.log(tenis);
}
*/
const produto1 = {
    nome: "Jaqueta",
    preco: 399.90,
    estoque: true,
    disponibilidade: 2
};

const produto2 = {
    nome: "Tenis",
    preco: 399.90,
    estoque: true,
    disponibilidade: 23
};

const produto3 = {
    nome: "Camiseta",
    preco: 29.90,
    estoque: true,
    disponibilidade: 21
};

const produto4 = {
    nome: "Calça",
    preco: 159.99,
    estoque: true,
    disponibilidade: 5
};
const produtos = [produto1, produto2, produto3, produto4]
const abaixoDe40 = produtos.find(produto => produto.preco < 40); //acha o produto com valor abaixo de 40
console.log(abaixoDe40);