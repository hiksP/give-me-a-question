import icon from '../../images/search-icon.svg'
import {useState} from 'react'

export default function AskForm({answerHandler}) {

    const [input, setInput] = useState('')

    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    const findAnswer = () => {
        if(input.length > 0) {
            answerHandler()
        } else {
            alert('Введите вопрос')
        }
    }

    return (
        <section className='askForm'>
            <div className="askForm__container">
                <img src={icon} alt='icon' className="askForm__image"></img>
                <form className='askForm__form'>
                    <input value={input} onChange={inputHandler} className="askForm__input"></input>
                    <button onClick={findAnswer} type='button' className='askForm__button'></button>
                </form>
            </div>
        </section>
    )
}