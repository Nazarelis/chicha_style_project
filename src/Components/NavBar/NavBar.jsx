import './NavBar.css'


const navBar = () => {
    return(
        <> 
            <nav>
                <div className="container-logo">
                   <img id='nav-logo' src="/assets/logo.png" alt="Bootstrap" width="15%" />                        
                 
                </div>
                <div className='container-menu'>
                    <ul className='ul-navbar'>
                        <li>
                            <a href='#seccion-conocenos'>Conocenos</a>
                        </li>
                        <li>
                            <a href='#seccion-servicios'>Nuestros Servicios</a>
                        </li>
                        <li>
                            <a href='#seccion-menu'>Menu</a>
                        </li>
                        <li>
                            <a href='#seccion-galeria'>Galeria</a>
                        </li>
                        <li>
                            <a href='#seccion-contact'>Contacto</a>
                        </li>
                    </ul>

                </div>
            </nav>


        </>
)
};

export default navBar; 