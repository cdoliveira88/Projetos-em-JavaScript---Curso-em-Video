function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO} Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //estou criando um elemento com nome img
        img.setAttribute('id', 'foto') //estou dando o id de "foto" para o elemento "img" que foi criado
        if (fsex[0].checked) { //esta sendo verificado se o o objeto fsex masculino[0] esta com checked, e sucessívemente
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png') //chamando a imagem com "src" e nome da foto
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' //comando esta centralizando a responta no próprio JS, sem precisar usar o CSS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //esta sendo adicionado ao objeto "res" o child "img"que aparece logo abaixo
    }
}