import './Contact.css';
import SocialNetworkButton from '../social-network-button/social-network-button';


const Contact = () => {
    return (
        <>
            <div className='contact-container' id='seccion-contact'>
                <div id='title-contact'>
                <h1>Donde Encontrarnos</h1>
                </div>
                <div className='items-contact'>
                    <SocialNetworkButton href='https://www.instagram.com/chichastyle.foodtruck/' detail='chichastyle.foodtruck' src='/assets/logo-instagram.png'/>
                    <SocialNetworkButton href='https://wa.me/351155190185' detail='351 155190185' src='/assets/logo-whatsapp.png'/>
                    <SocialNetworkButton href='https://www.facebook.com/chichastylefood' detail='Chicha Style Food Truck' src='/assets/logo-facebook.png'/>
                    <SocialNetworkButton href='mailto:chichastylefood@gmail.com' detail='chichastylefood@gmail.com' src='/assets/logo-correo.png'/>
                    <SocialNetworkButton href='https://www.tiktok.com/@chicha.foodtruck' detail='chicha.foodtruck' src='/assets/logo-tiktok.png'/>
                </div>
            </div>
        </>
    )

}

export default Contact;