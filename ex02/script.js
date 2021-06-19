function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano ){
        window.alert('Verifique o ano e tente novamente!')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img') //Criou um elemeto de imagem no html pelo Js
       img.setAttribute('id','foto')
       if(fsex[0].checked){
           genero = 'Homem'
           if(idade > 0 && idade < 10){
                img.setAttribute('src', '../exercicio02/babyboy.jpeg')
           }else if(idade < 21){
                img.setAttribute('src', '../exercicio02/adolescentehomem.jpeg')
           }else if(idade < 50){
                img.setAttribute('src', '../exercicio02/adultohomem.jpeg')
           }else{
                img.setAttribute('src', '../exercicio02/idosohomem.jpeg')
           }
       }else if(fsex[1].checked){
           genero = 'Mulher'
           if(idade > 0 && idade < 10){
                img.setAttribute('src', '../exercicio02/babygirl.jpeg')
            }else if(idade < 21){
                img.setAttribute('src', '../exercicio02/adoslecentemulher.jpeg')
            }else if(idade < 50){
                img.setAttribute('src', '../exercicio02/adultamulher.jpeg.jpeg')
            }else{
                img.setAttribute('src', '../exercicio02/idosamulher.jpeg')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img) // Vou adicionar um elemento que será o img
    }
}
