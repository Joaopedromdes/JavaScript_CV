let num = [5, 8, 2, 9, 3] //A contagem começa no 0 e não no 1
num[5] = 1  // coloque na posiçao 5, o número 1
num.push(7) //Vai colocar no último, o valor 7
num.length //Conta os elementos a partir do 1
num.sort() //Vai colocar todos os elementos em ordem crescente
num.indexOf(7) //Vai procurar a chave onde o valor 7 se encontra
//O pos é uma posiçao criada
for(let pos = 0; pos < num.length; pos++ ){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log(`Existem ${num.length} elementos no Array`)
console.log(num[1])
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
for(let pos in num){ //Só funciona para Arrays e Objetos
    //Para cada posição dentro do num
    console.log(num[pos])
}
console.log(`O valor está na posição ${num.indexOf(7)}`)