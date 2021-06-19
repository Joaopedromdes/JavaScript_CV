
function verificar(){
    var nasc = window.document.getElementById('nascimento')
    var mas = window.document.getElementById('masculino')
    var fem = window.document.getElementById('feminino')
    var botao = window.document.getElementById('botao')
    var res = window.document.getElementById('resultado')
    var imagem = window.document.getElementById('imagem')
    var agora = new Date()
    var anopc = agora.getFullYear()
    var nascnum = Number(nasc.value)
    var idade = anopc - nascnum
    if(idade < 12 ){
        res.innerHTML = `Detectamos ${mas} com ${idade} anos`
        imagem.src='babyboy.jpeg'
    }/*else if(idade < 12 && fem ){
        res.innerHTML = `Detectamos ${fem} com ${idade} anos`
        imagem.src='bebygirl.jpeg'
    }*/
}
