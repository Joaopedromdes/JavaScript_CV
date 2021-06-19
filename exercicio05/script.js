var num = window.document.getElementById('txtnum')
var res = window.document.getElementById('seltab')
var resultado = window.document.getElementById('res')
var valores= []
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)){

    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    
   
    var item = document.createElement('option')
    item.text = `Valor ${n} adicionado`
    res.appendChild(item)
}

function finalizar(){
    var res = window.document.getElementById('seltab')
    resultado.innerHTML = `${res.length}`
}