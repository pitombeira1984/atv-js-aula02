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
