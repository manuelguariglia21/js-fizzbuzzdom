const row = document.querySelector('.row');

for(let i = 1; i < 101; i++){
  const box = document.createElement('div'); //crea un elemento
  box.className = 'box'; //assegna a un elemento una classe
  box.innerHTML= i ; //aggiunge il contenuto all'interno del elemento
  row.append(box); //aggiunge un elemento

}