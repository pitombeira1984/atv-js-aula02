// ---Atividade 01---
var numero =  Number(prompt("Digite um numero!"))
var div = (numero % 2)

if( div == 0 && numero > 0){
    console.log(`O ${numero} é par e positivo`)
}
else if (!div == 0 && numero > 0){
    console.log(`O ${numero} é impar e positivo`)
}
else{
    console.log(`O ${numero} é negativo`)
}
// ---Atividade 01---
// ---Atividade 02---
var peso = Number(prompt("Digite seu peso:"))

var altura = Number(prompt("Digite seu altura:"))

var imc = peso/(altura**2)

if(imc <= 18.4){
    console.log(`O seu imc é ${imc}, então Abaixo do Peso`)
}
else if(imc >= 18.5 && imc <= 24.9){
    console.log(`O seu imc é ${imc}, então Peso Normal`)
}
else {
    console.log(`O seu imc é ${imc}, então Acima do Peso`)
}
// ---Atividade 02---
// ---Atividade 03---
var pc = Number(prompt("Digite o preço de um produto:"))
var idade = Number(prompt("Digite sua idade:"))
var desconto = (pc-(pc*0.1))
if(idade < 18){
    console.log(`O cliente tem ${idade} anos, e comprou um produto por R$${pc}, então desconto de 10%, preço final de R$${desconto}`)
}
else{
    console.log(`O cliente tem ${idade} anos, e comprou um produto por R$${pc}, então não tem desconto de 10%`)
}
// ---Atividade 03---
// ---Atividade 04---
var letra = prompt("Digite uma letra:")
let vogal = ["a", "e", "i", "o", "u"]
let vogalm = ["A", "E", "I", "O", "U"]
if (letra === vogal[0] || letra === vogalm[0]){
    console.log(`A letra digitada "${letra}" é uma Vogal `)
}
else if (letra === vogal[1] || letra === vogalm[1]){
    console.log(`A letra digitada "${letra}" é uma Vogal `)
}
else if (letra === vogal[2] || letra === vogalm[2]){
    console.log(`A letra digitada "${letra}" é uma Vogal `)
}
else if (letra === vogal[3] || letra === vogalm[3]){
    console.log(`A letra digitada "${letra}" é uma Vogal `)
}
else if (letra === vogal[4] || letra === vogalm[4]){
    console.log(`A letra digitada "${letra}" é uma Vogal `)
}
else{
    console.log(`A letra digitada "${letra}" é uma Consoante `)
}
// ---Atividade 04---
// ---Atividade 05---
var semana = Number(prompt("Digite um número de 1 a 7"))
switch(semana){
    case 1:console.log(`O numero "${semana}" equivale a segunda-feira `)
    break
    case 2:console.log(`O numero "${semana}" equivale a terça-feira `)
    break
    case 3:console.log(`O numero "${semana}" equivale a quarta-feira `)
    break
    case 4:console.log(`O numero "${semana}" equivale a quinta-feira `)
    break
    case 5:console.log(`O numero "${semana}" equivale a sexta-feira `)
    break
    case 6:console.log(`O numero "${semana}" equivale a sábado `)
    break
    case 7:console.log(`O numero "${semana}" equivale a domingo `)
    break
    default: console.log("Nenhuma das Alternatival")
    
}
// ---Atividade 05---
// ---Atividade 06---

   // ---Não Consegui fazer a Atividade 06---
   
// ---Atividade 06---
// ---Desafio Prático---

console.log("Digite o Calculo que deseja executar:") 
console.log("Digite 1 para Área do Triangulo:")
console.log("Digite 2 para Área do Retangulo:")
console.log("Digite 3 para Volume do Cubo:")
console.log("Digite 4 para Área do Circulo:")

var cal = Number(prompt("Digite o Calculo:"))

if (cal == 1){
    var b = prompt("Digite a Base:")
    var a = prompt("Digite a Altura:")
    console.log(`O numero digitado é ${cal}, então a Área do Triângulo é ${(b*a)/2}`)
}
else if (cal == 2){
    var b = prompt("Digite a Base:")
    var a = prompt("Digite a Altura:")
    console.log(`O numero digitado é ${cal}, então a Área do Retângulo é ${(b*a)}`)
}
else if (cal == 3){
    var aresta = prompt("Digite a Aresta:")
    console.log(`O numero digitado é ${cal}, então o Volume do Cubo é ${(aresta**3)}`)
}
else if (cal == 4){
    const pi = 3.14
    var r = prompt("Digite o Raio:")
    console.log(`O numero digitado é ${cal}, então a Área do Circulo é ${(pi*(r**2))}`)
}
else{
    console.log("Nenhuma Opção foi Digitada")
}
// ---Desafio Prático---