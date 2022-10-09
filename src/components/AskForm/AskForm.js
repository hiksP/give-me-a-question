import icon from '../../images/search-icon.svg'
import {useState} from 'react'

export default function AskForm({answerHandler}) {

    const [input, setInput] = useState('')
    const [error, setError] = useState('')
    const [button, setButton] = useState(false)

    const inputHandler = (e) => {
        setInput(e.target.value)
        if(!Array.from(e.target.value).includes('?')) {
            setButton(false)
            setError('Не хватает знака вопроса!')
        } else if(e.target.value.length > 1) {
            setButton(true)
            setError('')
        } else {
            setError('Какой то короткий вопрос, нужно больше буууукв')
            setButton(false)
        }
    }

    const findAnswer = (e) => {
        e.preventDefault();
        if(error) {
            return
        } else {
            answerHandler()
        }
    }

    return (
        <section className='askForm'>
            <div className="askForm__container">
                <img src={icon} alt='icon' className="askForm__image"></img>
                <form onSubmit={(e) => findAnswer(e)} className='askForm__form'>
                    <input value={input} onChange={inputHandler} className="askForm__input"></input>
                    <button disabled={!button} onClick={(e) => findAnswer(e)} type='button' className={!button ? `askForm__button askForm__button_disabled` : `askForm__button`}></button>
                </form>
            </div>
            <span className={error ? `askForm__error askForm__error_active` : `askForm__eror`}>{error}</span>
        </section>
    )
}