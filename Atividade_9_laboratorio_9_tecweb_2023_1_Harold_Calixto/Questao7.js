/*
    Atividade de laboratório 9 - JavaScript - 06/06/2023;
    Disciplina: Tecnologias Web;
    Professor: Fischer Ferreira;
    Semestre: 2023.1;
    Aluno: Harold Calixto de Albuquerque - Matrícula: 499735;
*/

array = [1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 5, 10];

function itemFrequente(array) {
    const frequencia = {};
    let frequenciaMax = 0;
    let itemMaisFrequente;
  
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      frequencia[item] = (frequencia[item] || 0) + 1;
    }

    for (const item in frequencia){
        if (frequencia[item] > frequenciaMax) {
            frequenciaMax = frequencia[item];
            itemMaisFrequente = item;
        }
    }
    return itemMaisFrequente;
}

console.log("Item mais frequente: ",itemFrequente(array));