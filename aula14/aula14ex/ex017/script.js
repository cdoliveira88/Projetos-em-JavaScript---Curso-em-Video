function calcular() {
    var num = document.querySelector('input#txtn')
    var resp = document.getElementById('txtf')
    if (num.value.length == 0) {
        window.alert('Verifique o valor')
    } else {
        txtf.innerHTML = 'Contando...'
        var n = Number(num.value)
        for (var c = 1; c <= 10; c++) {
            n *= c
            txtf.innerHTML = `${c}x${}=`
        }
    }

}