import './NavBar.css'


const navBar = () => {
    return(
        <>
            <nav id="container-nav" class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="container-logo">
                        <a class="navbar-brand" href="#">
                            <img src="../../../public/images/logo.png" alt="Bootstrap" width="15%" />
                        </a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a id='n-it' class="nav-link active" aria-current="page" href="#">Conocenos</a>
                            </li>
                            <li class="nav-item">
                                <a id='n-it' class="nav-link active" href="#">Nuestros Servicios</a>
                            </li>
                            <li class="nav-item">
                                <a id='n-it' class="nav-link active" href="#">Menú</a>
                            </li>
                            <li class="nav-item">
                                <a id='n-it' class="nav-link active" href="#">Galeria</a>
                            </li>
                            <li class="nav-item">
                                <a id='n-it' class="nav-link active" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )

};

export default navBar; 