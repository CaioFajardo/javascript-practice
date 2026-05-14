function usuarioCopia(objeto) {
    let ativarUsuario = {...objeto}
    
    ativarUsuario["ativo"] = true 

    return ativarUsuario
}

console.log(usuarioCopia({ nome: "João", ativo: false }))