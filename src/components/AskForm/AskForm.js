import icon from '../../images/search-icon.svg'

export default function AskForm() {
    return (
        <section className='askForm'>
            <div className="askForm__container">
                <img src={icon} alt='icon' className="askForm__image"></img>
                <form className='askForm__form'>
                    <input className="askForm__input"></input>
                    <button className='askForm__button'></button>
                </form>
            </div>
        </section>
    )
}