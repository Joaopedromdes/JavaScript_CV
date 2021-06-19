var agora = new Date() /*Esses comandos vão trazer o dia da semana que você logou, porém trarão em forma de números*/ 
var diasem = agora.getDay()
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/ 

switch(diasem){
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2: 
        console.log('Tuesday')
        break
    case 3: 
        console.log('wednesday')
        break
    case 4:
        console.log('thrusday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    default: 
        console.log('Dia inválido!')
        break
}