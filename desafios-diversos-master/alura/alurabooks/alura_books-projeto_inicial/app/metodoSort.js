let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordernarLivroPorPreco);

function ordernarLivroPorPreco() {
    let livroOrdenados = livros.sort((a , b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livroOrdenados);
}