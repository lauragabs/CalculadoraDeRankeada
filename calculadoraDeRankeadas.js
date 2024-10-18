let vitorias = 15
let  derrotas = 5
let saldo = calcularPontuacao(vitorias, derrotas)
let nivel

if (saldo <= 10){
    nivel = "Ferro"
}else if (saldo <= 20){
    nivel = "Bronze"
}else  if (saldo <= 50){
    nivel = "Prata"
}else if (saldo <= 80){
    nivel = "Ouro"
}else if (saldo <= 90){
    nivel = "Diamante"
}else if (saldo <= 100){
    nivel = "Lendario"
}else {
    nivel = "Imortal"
}

console.log("O Herói tem de saldo de " +saldo+ "está no nível de "+ nivel)


function  calcularPontuacao(vitorias, derrotas){
    saldo =  vitorias - derrotas
    return saldo
}