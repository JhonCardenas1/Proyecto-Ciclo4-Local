import React from "react";

const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')

const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content


const fragment = document.createDocumentFragment()
let carrito={}  

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
/*cards.addEventListener('click', e =>{
    addCarrito(e)
} )*/

items.addEventListener('click', e =>{
   // btnAccion(e)
} )

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        //console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id


        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

/*const addCarrito = e =>{
    //console.log(e.target)
    //console.log(e.target.classList.contains('btn-dark'))
    if (e.target.classList.contains('btn-dark')){
        e.target.parentElement
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}*/

const setCarrito = objeto =>{
    //console.log(objeto)
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.i] = {...producto}    
    pintarCarrito()
}
const pintarCarrito = () => {
    items.innerHTML =''
    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.cantidad
        templateCarrito.querySelectorAll('td')[1].textContent = producto.title
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()
}
const pintarFooter = () =>{
    footer.innerHTML = ''
    if (Object.keys(carrito).length === 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`

        return
    }

    const nCantidad =  Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad ,0)
    const nPrecio =  Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio,0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio
    
    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () =>{
        carrito = {}
        pintarCarrito()
    })
    
}



export function App1() {

    return (

        







         <div class="container">
            <h1>Carrito</h1>

            <div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Acción</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody id="items"></tbody>
                    <tfoot>
                        <tr id="footer">
                            <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
                        </tr>
                    </tfoot>
                </table>
                <div class="row" id="cards"></div>
            </div>

            <template id="template-footer">
                <th scope="row" colspan="2">Total productos</th>
                <td>10</td>
                <td>
                    <button class="btn btn-danger btn-sm" id="vaciar-carrito">vaciar todo</button>
                    <button class="btn btn-success" id="finalizar-compra">Finalizar Compra</button>
                </td>
                <td class="font-weight-bold">$ <span>5000</span></td>
            </template>


            <template id="template-carrito">
                <tr>
                    <th scope="row">id</th>
                    <td>Café</td>
                    <td>1</td>
                    <td>
                        <button class="btn btn-info btn-sm">
                            +
                        </button>
                        <button class="btn btn-danger btn-sm">
                            -
                        </button>
                    </td>
                    <td>$ <span>500</span></td>
                </tr>
            </template>


            <template id="template-card">
                <div class="col-12 mb-2 col-md-4">
                    <div class="card">
                        <img src="" alt="" class="card-img-top"></img>
                        <div class="card-body">
                            <h5>Titulo</h5>
                            <p>precio</p>
                            <button class="btn btn-dark">Comprar</button>
                        </div>
                    </div>
                </div>
            </template>    
        </div>  
        
        


    )

   

}











<div class="container">
            <h1>Carrito</h1>
            <hr>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Acción</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody id="items"></tbody>
                    <tfoot>
                        <tr id="footer">
                            <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
                        </tr>
                    </tfoot>
                </table>
                <div class="row" id="cards"></div>
            </hr>

            <template id="template-footer">
                <th scope="row" colspan="2">Total productos</th>
                <td>10</td>
                <td>
                    <button class="btn btn-danger btn-sm" id="vaciar-carrito">vaciar todo</button>
                    <button class="btn btn-success" id="finalizar-compra">Finalizar Compra</button>
                </td>
                <td class="font-weight-bold">$ <span>5000</span></td>
            </template>


            <template id="template-carrito">
                <tr>
                    <th scope="row">id</th>
                    <td>Café</td>
                    <td>1</td>
                    <td>
                        <button class="btn btn-info btn-sm">
                            +
                        </button>
                        <button class="btn btn-danger btn-sm">
                            -
                        </button>
                    </td>
                    <td>$ <span>500</span></td>
                </tr>
            </template>


            <template id="template-card">
                <div class="col-12 mb-2 col-md-4">
                    <div class="card">
                        <img src="" alt="" class="card-img-top"></img>
                        <div class="card-body">
                            <h5>Titulo</h5>
                            <p>precio</p>
                            <button class="btn btn-dark">Comprar</button>
                        </div>
                    </div>
                </div>
            </template>

              
        </div>





