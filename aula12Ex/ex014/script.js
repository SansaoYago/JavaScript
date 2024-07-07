function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/foto-manha.png'
        window.document.body.style.background = '#F7E4CC'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/foto-tarde.png'
        window.document.body.style.background = '#F4C7A3'
    } else {
        // BOA NOITE!
        img.src = 'imagens/foto-noite.png'
        window.document.body.style.background = '#3E3354'
    }
}

