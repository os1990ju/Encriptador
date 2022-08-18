const h3 = document.createElement('h3');
const texto = document.createTextNode('holita');
h3.appendChild(texto)
document.append('agregot textodirecto', document.createElement('h1'))


// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Creo un elemento
const nodo = document.createElement("span")
parentElement.insertAdjacentElement("beforebegin", nodo)


// : Inserta nodos según las opciones que le pasemos:
// beforebegin: Lo inserta antes del nodo
// afterbegin: Lo inserta despues del nodo
// beforeend: Lo inserta antes de donde finaliza el nodo
// afterend: Lo inserta después de donde finaliza el nodo

eliminar nodo.parentElement.removeChild(nodo) 
mejorado nodo.remove()
