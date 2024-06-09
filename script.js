let loadmore = doccument.queryselector('#load-more');
let currentitem = 4;

loadMoreBtn.onclick = () => {

    let boxes = [...document.querySelectorAll('.box-container .box')];
    for(var i = currentitem; i< currentitem + 4; i++) {
        boxes[i].computedStyleMap.display = 'inline-block';
    }
    currentitem += 4;
    if(currentitem >= boxes.length) {
        loadMoreBtn.style.display = 'none'
    }

}

//carrito

const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
cons lista = document.querySelector('#lista-carrito tbody');
cons vaciarcarritoBtn = document.getElementById('vaciart-carrito');

cargarEventlisteners();

function cargarEventlisteners() {
    elementos1.addEventListener('click , comprarElemento');
    carrito.addEventListener('click', eliminarElemento);
    vaciarcarritoBtn.addEventListener('click, vaciarcarrito');

}

function comprarElemento(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }



    function leerDatosElemento(elemento) {
        const infoElemento = {
            imagen: elemento.querySelector('img').src,
            titulo: elemento.querySelector('h3').textContent,
            precio: elemento.querySelector('.precio').textcontent,
            id: elemento.querySelector('a').getattribute('data-id')

        }
        insertarcarrito(infoElemento)
    }
   
    function insertarcarrito(elemento) {

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 /> 
         </td>

            <td>
             ${elemento.titulo}   
            </td>
            
            <td>
                ${elemento.precio}
            </td>
            
            <td>
            
                <a herf="#" class="borrar" data-id="${elemento.id0}" >x</a>
            
            </td>
    `;

    lista.appendChild(row);


    }
}


function eliminarElemento(e) {

    e.preventDefault();
    let elemento,
    let elementoId;

     if(e.target.classlist.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id')
     }
}

function vaciarcarrito() {
    while(lista.firstchild) {
        lista.removechild(lista.firstchild);
    }
    return false;
}