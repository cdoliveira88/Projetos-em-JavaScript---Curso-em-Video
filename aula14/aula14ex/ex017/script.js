function calcular() {
    var num = document.querySelector('input#txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        //txtf.innerHTML = 'Contando...'
        var n = Number(num.value)
            //var c = 1
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option') //criando um elemento dentro da select
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //esse value no item faz mais sentido no PHP, para que cada item tenha um valor
            tab.appendChild(item)
                //c++
        }

    }
}