const livro = {
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    ano: 1937,
    paginas: 310,

    descricao() {
        return `${this.titulo} por ${this.autor} (${this.ano})`;
    }
};

console.log(livro.descricao());