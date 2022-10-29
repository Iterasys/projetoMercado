let calcularAreaDoQuadrado = (lado) => {
    if (lado == null || lado <= 0){
        return "Por favor, informe um tamanho de lado válido"
    } 
    else {
        return lado ** 2
    }
}

let calcularAreaDoRetangulo = (largura, comprimento) => {
    if (largura == null 
        || comprimento == null 
        || largura <= 0 
        || comprimento <= 0){
            return "Por favor, informe uma largura e/ou comprimento validos"
    }
    else {
        return largura * comprimento
    }
}

module.exports = {
    calcularAreaDoQuadrado,
    calcularAreaDoRetangulo
}