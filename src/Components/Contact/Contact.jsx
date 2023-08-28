import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className='contact-container'>
                <div id='title-contact'>
                    <h1>Donde Encontrarnos</h1>
                </div>
                <div className='items-contact'>
                    <div className='item'>
                        <a href='https://www.instagram.com/chichastyle.foodtruck/'>
                        <img className='icon' src="../../../public/images/logo-instagram.png" />
                        </a>
                        <p>chichastyle.foodtruck</p>
                    </div>
                    <div className='item'>
                        <a href=''>
                        <img className='icon'  src="../../../public/images/logo-whatsapp.png" />
                        </a>
                        <p>351 155190185</p>
                    </div>
                    <div className='item'>
                        <a href='https://www.facebook.com/chichastylefood'>
                        <img className='icon'  src="../../../public/images/logo-facebook.png" />
                        </a>
                        <p>Chicha Style Food Truck</p>
                    </div>
                    <div className='item'>
                        <a href="">
                        <img className='icon'  src="../../../public/images/logo-correo.png" />
                        </a>
                        <p>chichastylefood@gmail.com</p>
                    </div>
                    <div className='item'>
                        <a href="https://www.tiktok.com/@chicha.foodtruck">
                        <img className='icon' src="../../../public/images/logo-tiktok.png" />
                        </a>
                        <p>chicha.foodtruck</p>
                    </div>
                </div>
                

            </div>

        </>
    )

}

export default Contact;