import './social-network-button.css'

const button = (props) => {
    return (
        <div className='item'>
            <a className='icon-img' href={props.href} target='_blank'>
                <img src={props.src} />                
            </a>
            <p className='detailSocialNetworkButton'>{props.detail}</p>
        </div>
    )
}

export default button;