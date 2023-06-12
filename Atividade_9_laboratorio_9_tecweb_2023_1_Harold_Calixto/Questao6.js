/*
    Atividade de laboratório 9 - JavaScript - 06/06/2023;
    Disciplina: Tecnologias Web;
    Professor: Fischer Ferreira;
    Semestre: 2023.1;
    Aluno: Harold Calixto de Albuquerque - Matrícula: 499735;
*/

number = "025468";

function addTraco(num) {
    const str = num.toString().split('');
    const result = [str[0]];
  
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
            result.push('-', str[i]);
        }
        else {
            result.push(str[i]);
        }
    }
    return result.join('');
}

console.log(addTraco(number));