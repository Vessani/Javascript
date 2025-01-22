alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 3;
let chute
let tentativas = 1

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número de 1 a 10');

    if (chute == numeroSecreto) {
        alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    } 
    tentativas ++
};