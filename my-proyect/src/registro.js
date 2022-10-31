//Vista para el registro de productos nuevos

import React from "react";

export function App() {
    return (
        <div class="container">    
            <div class="row justify-content-center align-items-center">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Software y Servicios JJEJ
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="Lista_Productos"
                                >
                                    Lista Productos
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Modificar_Productos">
                                    Modificar Productos
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Lista_Ventas">
                                    Lista Ventas
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                <div class="col-sm-6">
                    <div class=" border mx-auto shadow-lg p-3 mb-5 mt-4 bg-body rounded" >
                        <div class="border mx-auto border-dark rounded mb-3 d-flex justify-content-center align-items-center bg-success text-dark bg-opacity-70 " >
                            <h1 class="p-2 mt-2 h2 fw-bold">Registro de productos </h1>
                        </div>
                        <form action="" class="row g-3 border mx-auto mt-2 border-dark rounded ">
                            <div>
                                <label for="nombre" class="form-label fw-bold">Nombre</label>
                                <input class="form-control mb-2" type="text" name="nombre del producto"
                                    placeholder="Ingrese nombre" />
                            </div>
                            <div class="col-md-7 position-relative">
                                <label for="precio" class="form-label fw-bold">Precio</label>
                                <input class="form-control mb-2" type="text" name="Precio del producto"
                                    placeholder="Ingrese precio" />
                            </div>
                            <div class="col-md-5 position-relative">
                                <label for="cantidad" class="form-label fw-bold">Cant. en stock</label>
                                <input class="form-control mb-2" type="text" name="descripcion"
                                    placeholder="Ingrese la cantidad" />
                            </div>
                            <div>
                                <label for="imagen" class="form-label fw-bold">Imagen del producto</label>
                                <input class="form-control mb-2" type="file" name="imagen"
                                    placeholder="Ingrese la imagen" />
                            </div>
                            <div>
                                <label for="descripcion" class="form-label fw-bold">Descripción del producto</label>
                                <textarea class="form-control mb-2" rows="3"
                                    placeholder="Ingrese la descripcion del producto"></textarea>
                            </div>

                            <div class="d-flex justify-content-center align-items-center">
                            <button type="button" class="btn btn-success px-4 mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button>
                            </div>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Mensaje de alerta</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            El producto se agrego correctamente
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ) 
    
}

/*
<div class="d-flex justify-content-center align-items-center">
<button class="btn btn-success px-4 mb-2 mt-1 "  data-bs-toggle="modal"  type="submit">Guardar</button>
</div>

*/