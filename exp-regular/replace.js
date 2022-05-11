const { texto } = require('./base');

// O método replace troca o primeiro item entre parênteses pelo segundo (que está após a vírgula). Troca o primeiro 'Maria' por 'Josefa' (é case sensitive). Mostra o texto todo.
console.log(texto.replace('Maria', 'Josefa'));

// Troca todos os 'Maria' ou 'maria' por 'Josefa'. Mostra o texto todo.
console.log(texto.replace(/Maria/gi, 'Josefa')); 

// Troca o primeiro 'Maria', 'maria', 'leone' ou 'Leone' por 'Josefa'
console.log(texto.replace(/Maria|Leone/i, 'Josefa'));

// Troca todos 'Maria', 'maria', 'leone' e 'Leone' por 'Josefa'
console.log(texto.replace(/Maria|Leone/ig, 'Josefa'));

//$1 faz referência ao conteúdo dentro dos parênteses (grupo). Faz substituir todos os 'Maria', 'maria', 'leone' e 'Leone' por '<b>Maria</b>', '<b>maria</b>', '<b>leone</b>' e '<b>Leone</b>'
console.log(texto.replace(/(Maria|Leone)/ig, '<b>$1</b>'));

// Converte todos os 'Maria', 'maria', 'leone' e 'Leone' em letras maiúsculas
console.log(texto.replace(/(Maria|Leone)/ig, function(input) {
    return input.toUpperCase();
}));