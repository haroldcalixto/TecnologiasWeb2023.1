/*
    Atividade de laboratório 9 - JavaScript - 06/06/2023;
    Disciplina: Tecnologias Web;
    Professor: Fischer Ferreira;
    Semestre: 2023.1;
    Aluno: Harold Calixto de Albuquerque - Matrícula: 499735;
*/

arrayorg = [10, 12, 14, 16];

function cloneArray(arrayorg) {
    return arrayorg.slice();
}

arrayclone = cloneArray(arrayorg);

console.log(arrayclone);

console.log(arrayorg === cloneArray);