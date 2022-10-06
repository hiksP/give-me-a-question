import qusetion from '../../images/questionMark.svg';

export default function Header() {
    return (
        <header className="header">
            <a className='header__link' href='#'><img src={qusetion} alt='logo' className="header__logo"></img></a>
            <h1 className="header__name">Give me a question</h1>
        </header>
    )
}