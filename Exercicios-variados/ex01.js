// Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 	 não	 serão	
// informados	valores	iguais)	e	escrever	o	maior	deles.

function maiorNumero(n1, n2) {
  if (n1 >= n2) {
    return alert("O maior numero é " + n1)
  }
  else {
    return alert("O maior numero é " + n2)
  }
}
var num1 = prompt("Digite um numero:")
var num2 = prompt("Digite outro numero:")
maiorNumero(num1, num2)





