function adicionar(){
    var horas = window.document.getElementById('object')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    horas.innerHTML = `Agora são ${hora} horas.`
    var corpo = window.document.body

    if(hora >= 0 && hora < 12){
        corpo.style.background = 'rgba(206, 182, 77, 0.685)'
        imagem.src = 'amanhecer.jpg'
    }else if(hora >= 12 && hora < 19){
        corpo.style.background = 'rgba(141, 98, 18, 0.76)'
        imagem.src = 'entardecer.jpg'
    }else{
        corpo.style.background = 'rgba(14, 13, 13, 0.836)'
        imagem.src = 'anoitecer.jpg'
    }
}