import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/JoanAquinoVasquez'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://x.com/JoanAqu22593051/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/joan_aquinovasquez/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Joan Edinson Aquino Vasquez</strong>
    </footer>
}

export default Footer