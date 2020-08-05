function contar() {
    var num = document.querySelector('input#txti')
    var final = document.querySelector('input#txtf')
    var pass = document.querySelector('input#txtp')
    var resp = document.getElementById('res')


    if (num.value.length == 0 || final.value.length == 0 || pass.value.length == 0) {
        window.alert('Revise os dados informados!')
    } else {
        res.innerHTML = 'Contando... <br>'
        var ini = Number(num.value)
        var fin = Number(final.value)
        var pas = Number(pass.value)
        if (pas == 0) {
            window.alert('Passo inválido. Considerando passo 1')
            pas = 1
        }

        if (ini < fin) {
            //contagenm crescente
            for (var c = ini; c <= fin; c += pas) {
                resp.innerHTML += `${c} \u{1F603}` //formato do código para colocar emoction, só funciona entre crazes
            }
        } else {
            //contagem regressiva
            for (var c = ini; c >= fin; c -= pas) {
                res.innerHTML += `${c} \u{1F603}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}