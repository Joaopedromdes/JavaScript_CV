function gerar(){
    var num = window.document.getElementById('txtnum')
    var n = Number(num.value)
    if(num.value.length == 0){
        alert('Por favor informe um número')
    }else{
        var res = window.document.getElementById('seltab')
        var c = 1
        res.innerHTML = '' //Isso é para limpar a tabuada antes de começar, assim ela n se repetirá
        while(c <= 10){
            var item = document.createElement('option') //Para criar elementos de HTML dento de JS
            var mult = n * c
            item.text = `${n} X ${c} = ${mult}`
            item.value = `tab${c}`
            res.appendChild(item) //Adicionar elemento filho
            c++
        }
    }
}