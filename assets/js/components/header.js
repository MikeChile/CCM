// header.js
function loadHeader() {
    const headerHTML = `
        <!-- BARRA SUPERIOR-->
    <div id="barra">
        <a href="https://www.lirmi.com/" class="link">
            <i class='bx bxs-lock'></i><span class="d-none d-md-inline"> Lirmi</span>
        </a>
        <a href="https://bibliotecadigitalccm.cl/" class="link">
            <i class='bx bxs-book-reader'></i><span class="d-none d-md-inline"> Biblioteca Digital</span>
        </a>
        <!-- Botón para activar el modal -->
        <a href="#" class="link" data-bs-toggle="modal" data-bs-target="#contactModal">
            <i class='bx bx-envelope'></i><span class="d-none d-md-inline"> Contacto</span>
        </a>

        <!-- Modal -->
        <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="contactModalLabel">Contacto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <section class="contact_us">
                            <div class="container">
                                <div class="row m-0">
                                    <div class="col-md-10 offset-md-1">
                                        <div class="contact_inner">
                                            <div class="row">
                                                <div class="col-md-10">
                                                    <div class="contact_form_inner">
                                                        <div class="m-0 p-4">
                                                            <h3>Contactanos</h3>
                                                            <p>Siéntete libre de contactarnos en cualquier momento. ¡Te
                                                                responderemos tan pronto como podamos!.</p>
                                                            <input type="text" class="form-control form-group"
                                                                placeholder="Nombre" />
                                                            <input type="text" class="form-control form-group"
                                                                placeholder="Email" />
                                                            <textarea class="form-control form-group"
                                                                placeholder="Mensaje"></textarea>
                                                            <button class="contact_form_submit">Enviar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="right_conatct_social_icon d-flex align-items-end">
                                                        <div class="socil_item_inner d-flex">
                                                            <!--
                                                        <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>-->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- BARRA PRINCIPAL-->
    <nav class="navbar">
        <div class="container-fluid">

            <div class="row cajaBarra">
                <div class="col-6 col-md-4 order-1 order-md-1">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        Menú
                    </button>
                </div>
                <div class="col-12 col-md-4 text-center order-3 order-md-2">
                    <p id="titulo">CORAZÓN <a href="index.html"><img class="logo" src="./assets/img/logo CCM.png"
                                alt=""></a> DE MARÍA</p>
                </div>
                <div class="col-6 col-md-4 text-end order-2 order-md-3">
                    <div class="navbar-brand">
                        <a href="" class="d-none d-md-inline"><i class='bx bx-search'></i></a>
                        <a href="noticias.html" class="d-none d-md-inline">Noticias</a>
                        <a href="admision-2025.html" id="admision">Admisión</a>
                    </div>
                </div>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Colegio
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Historia</a></li>
                            <li><a class="dropdown-item" href="#">Misión, Visión y Valores</a></li>
                            <li><a class="dropdown-item" href="#">Misioneras del Corazón de María</a></li>
                            <li><a class="dropdown-item" href="#">Infraestructura</a></li>

                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Organización</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Documentos
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Academicos</a></li>
                            <li><a class="dropdown-item" href="#">Institucionales</a></li>
                            <li><a class="dropdown-item" href="#">Informativos</a></li>
                            <li><a class="dropdown-item" href="#">Lecturas Complementarias</a></li>

                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="talleres.html">Talleres</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Buscar">
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>

    <!-- BARRA DE INFORMACIÓN-->
    <div id="barra-info" class="mb-3">
        <p>Comienzo de clases 2025 <a href=""><b>info aquí</b></a></p>
    </div>
    `;
    document.getElementById('header-component').innerHTML = headerHTML;
}

// Ejecuta la función al cargar el archivo
loadHeader();
