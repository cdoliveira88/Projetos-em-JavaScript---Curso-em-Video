function contar() {
    document.querySelector('div#res', 'div#mostrar')
    var num = document.querySelector('input#inicio')
    var final = document.querySelector('input#fim')
    var pass = document.querySelector('input#passo')
    res.innerHTML = 'Contando:'
    if (final.value == 0) {
        alert('Revise os dados informados!')
    }
    for (num.value; num.value <= final.value; num.value += pass.value) {
        mostrar.innerHTML = `${num.value}`

    }

}