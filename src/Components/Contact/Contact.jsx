import './Contact.css';
import SocialNetworkButton from '../social-network-button/social-network-button';


const Contact = () => {
    return (
        <>
            <div className='contact-container'>
                <div id='title-contact'>
                <h1>Donde Encontrarnos</h1>
                </div>
                <div className='items-contact'>
                    <SocialNetworkButton href='https://www.instagram.com/chichastyle.foodtruck/' detail='chichastyle.foodtruck' src='../../public/images/logo-instagram.png'/>
                    <SocialNetworkButton href='' detail='351 155190185' src='../../../public/images/logo-whatsapp.png'/>
                    <SocialNetworkButton href='https://www.facebook.com/chichastylefood' detail='Chicha Style Food Truck' src='../../../public/images/logo-facebook.png'/>
                    <SocialNetworkButton href='' detail='chichastylefood@gmail.com' src='../../../public/images/logo-correo.png'/>
                    <SocialNetworkButton href='https://www.tiktok.com/@chicha.foodtruck' detail='chicha.foodtruck' src='../../../public/images/logo-tiktok.png'/>
                </div>
            </div>
        </>
    )

}

export default Contact;