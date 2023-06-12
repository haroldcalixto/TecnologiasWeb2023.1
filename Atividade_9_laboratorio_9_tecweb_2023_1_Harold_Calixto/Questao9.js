/*
    Atividade de laboratório 9 - JavaScript - 06/06/2023;
    Disciplina: Tecnologias Web;
    Professor: Fischer Ferreira;
    Semestre: 2023.1;
    Aluno: Harold Calixto de Albuquerque - Matrícula: 499735;
*/

array1 = [10, 20, 30, 40];
array2 = [50, 60, 70, 80];

function somaDosArrays(arry1, arry2) {
    const resultado = [];
  
    const maxLength = Math.max(array1.length, array2.length);
  
    for (let i = 0; i < maxLength; i++) {
      const value1 = array1[i] || 0;
      const value2 = array2[i] || 0;
      resultado.push(value1 + value2);
    }
  
    return resultado;
}

console.log(somaDosArrays(array1, array2));