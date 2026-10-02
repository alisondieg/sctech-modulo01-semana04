
const produto = {
    nome: "Camiseta",
    preço: 69.90,
    qtdEstoque: 20,
    disponivel: true
};

console.log(produto)
console.log(produto.nome)
console.log(produto.disponivel)

produto.categoria = "Roupas" // Adiciona um novo objeto
delete produto.disponivel // Deleta o objeto

console.log(produto)

console.log(Object.keys(produto)); ///Retorna um array listando as propriedades do produto
console.log(Object.values(produto)); //retorna um Array com os valores das propriedades