function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const livroNivel1 = {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    ano: 1988,
    paginas: 208,

    tituloPorAutor(mostrarPaginas) {
        return `${this.titulo} por ${this.autor} (${this.ano})`
    }
}

printTitulo("NÍVEL 1")

console.log(livroNivel1.tituloPorAutor())

// Nível 2

const livroNivel2 = {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    ano: 1988,
    paginas: 208,

    tituloPorAutor(mostrarPaginas) {
        if (mostrarPaginas === true) {
            return `${this.titulo} por ${this.autor} (${this.ano}) - ${this.paginas} pagina(s)`
        }

        return `${this.titulo} por ${this.autor} (${this.ano})`
    }
}

printTitulo("NÍVEL 2")

console.log(livroNivel2.tituloPorAutor(true))
console.log(livroNivel2.tituloPorAutor())