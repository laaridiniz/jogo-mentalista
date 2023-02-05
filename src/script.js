var numeroSecreto = parseInt(Math.random() * 1001);
/*var qtdeChutes = while (chute) {
  qtdeChutes += 1;
}*/

while (chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 0 e 1000:');
  if (chute == numeroSecreto) {
    alert('Você acertou!');
  } else if (chute > numeroSecreto) {
    alert('Você errou... o número secreto é menor do que ' + chute);
  } else if (chute < numeroSecreto) {
    alert('Você errou... o número secreto é maior do que ' + chute);
  }
}