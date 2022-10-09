export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Ссылки:</p>
            <ul className="footer__list">
                <a className="footer__link" href="https://t.me/hiksvalp" target={`_blank`}><li className="footer__list-item">Telegram</li></a>
                <a className="footer__link" href="https://github.com/hiksP/" target={`_blank`} ><li className="footer__list-item">GitHub</li></a>
            </ul>
        </footer>
    )
}