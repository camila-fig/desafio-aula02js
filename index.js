let num1 = prompt('Insira um número')
let num2 = prompt('Insira outro número')

let nome = prompt('Escreva seu primeiro nome:')
let sobrenome = prompt('Escreva seu sobrenome:')

console.log('Lembrando que os números que você inseriu foram:', `${num1} e ${num2}`)
console.log('A soma dos números inseridos é:', parseInt(num1) + parseInt(num2))
console.log('A multiplicação dos números inseridos é:', parseInt(num1) * parseInt(num2))
console.log('E a subtração dos números inseridos é:', parseInt(num1) - parseInt(num2))

console.log('Sr(a)',`${nome} ${sobrenome}`, ', agradeço por testar meu código em JavaScript.')