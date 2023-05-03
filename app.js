var numeroSecreto = parseInt(Math.random() * 1001);
var numeroDeChutes = 0;


while (chute != numeroSecreto) {
  var chute = prompt('Digite um numero entre 1 e 1000')

  if (chute == numeroSecreto)
    {
      alert('Voce acertou! Voce fez: ' + numeroDeChutes + ' tentativas') 
    }
  else if (chute > numeroSecreto)
    {
      alert('Voce Errou! O numero e menor que ' + chute)
      numeroDeChutes++;
      alert('Numero de Tentativas: ' + numeroDeChutes)
    }
  else if (chute < numeroSecreto) 
    {
      alert('Voce Errou! O numero e maior que ' + chute)
      numeroDeChutes++;
      alert('Numero de Tentativas: ' + numeroDeChutes)
    }
  
  if (numeroDeChutes == 10)
    {
      alert('Voce chegou no numero maximo de tentativas! Fim de jogo!')
      break;
    }
  
  if (chute == 0)
    {
      alert('Numero 0 nao existe, escolha um numero de 1 a 1000')
    }
}

//Desafios: Adicionar as tentativas e arrumar um pouco o texto. tipo "Errou, o numero é menor do q seu chute" - Feito
//Não poder botar 0 - Feito
//Botar um numero de tentativas para errar - Feito

