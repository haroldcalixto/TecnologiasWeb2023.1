/*
    Atividade de laboratório 9 - JavaScript - 06/06/2023;
    Disciplina: Tecnologias Web;
    Professor: Fischer Ferreira;
    Semestre: 2023.1;
    Aluno: Harold Calixto de Albuquerque - Matrícula: 499735;
*/

const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];

for (let i = 0; i < vetorAdiciona.length; i++) {
    vetorPilha.push(vetorAdiciona[i]);
}

console.log(vetorPilha);