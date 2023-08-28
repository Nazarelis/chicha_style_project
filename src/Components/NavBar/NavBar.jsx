import './NavBar.css'


const navBar = () => {
    return(
        <> 
            <nav>
                <div className="container-logo">
                    <a href="#">
                        <img id='nav-logo' src="../../../public/images/logo.png" alt="Bootstrap" width="15%" />                        </a>
                </div>
                <div className='container-menu'>
                    <ul>
                        <li>
                            <a href='#'>Conocenos</a>
                        </li>
                        <li>
                            <a href='#'>Nuestros Servicios</a>
                        </li>
                        <li>
                            <a href='#'>Menu</a>
                        </li>
                        <li>
                            <a href='#'>Galeria</a>
                        </li>
                        <li>
                            <a href='#'>Contacto</a>
                        </li>
                    </ul>

                </div>
            </nav>


        </>
)
};

export default navBar; 