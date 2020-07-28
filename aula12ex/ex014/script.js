function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
        //var hora = 16
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#e8c74b'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        document.body.style.background = '#fe9403'
        img.src = 'fototarde.png'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}