/*
    Atividade de laboratório 9 - JavaScript - 06/06/2023;
    Disciplina: Tecnologias Web;
    Professor: Fischer Ferreira;
    Semestre: 2023.1;
    Aluno: Harold Calixto de Albuquerque - Matrícula: 499735;
*/

array = ["JavaScript", "Node", "Python", "Java", "SQL", "javascript", "PYTHON", "1", "2", "3", "1"];

function removeItemDuplicado(array) {
    const ignoreLetras = new Map();
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      const item = array[i].toLowerCase();
  
      if (!ignoreLetras.has(item)) {
        ignoreLetras.set(item, true);
        result.push(array[i]);
      }
    }
  
    return result;
}
  
console.log(removeItemDuplicado(array));