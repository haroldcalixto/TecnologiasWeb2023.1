/*
    Atividade de laboratório 9 - JavaScript - 06/06/2023;
    Disciplina: Tecnologias Web;
    Professor: Fischer Ferreira;
    Semestre: 2023.1;
    Aluno: Harold Calixto de Albuquerque - Matrícula: 499735;
*/

array = [18, 20, 22, 24];

n = 2;

function getFirstElements(array, n = 1) {
    return array.slice(-n);
}

console.log(getFirstElements(array));
console.log(getFirstElements(array, n));