/*
window.alert = alert
alert('Sem bem-vindo!')

window.confirm = confirm
confirm('Você quer jogar xadrez?')
Se eu pressionar 'OK', retorna 'true'
Se eu pressionar 'Cancelar', retorna 'false'

window.prompt = prompt
prompt('Qual é o seu nome?')
Retorna uma string
*/

const num1 = Number(prompt('Digite um número'));
const num2 = Number(prompt('Digite outro número'));
const resultado = num1 + num2;
alert(`O resultado foi ${resultado}`);
