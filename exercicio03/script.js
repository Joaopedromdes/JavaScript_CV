function contar(){
    var ini = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var resultado = window.document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossível contar'
       // alert('Erro. Preencha todos os campos obrigatórios')
    }else{
        resultado.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if(i < f){
            for(var c = i; c <= f; c += p){
                resultado.innerHTML += `${c} \u{27A1}`
            }
        }else{
            for(var c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{27A1}`
            }
        }
        resultado.innerHTML += `\u{1f3c1}`
    }    
        /*else if(p.value.length <= 0){
        alert('Passo inválido! Considerando: Passo 1')
        p.value = 1
        for(var c = i; c <= f; c = c+p){
            resultado.innerHTML = `Contando ${c}`
        }
    }else{
        for(var c = i; c <= f; c = c+p){
            resultado.innerHTML = `Contando: ${c}`
    }
   
    
    }*/
   
}