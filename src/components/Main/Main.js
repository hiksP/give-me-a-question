import {useState, useEffect} from 'react'

export default function Main({image, answer, preloader}) {

    const [answerRu, setAnswerRu] = useState('')

    useEffect(() => {
        switch(answer) {
            case 'yes':
                setAnswerRu('да')
                break
            case 'no': 
                setAnswerRu('нет')
                break
            case 'maybe':
                setAnswerRu('возможно')
                break
            default:
                setAnswerRu('')
        }
    }, [answer])
    

    return !preloader ? (
        <main className="main">
            <div className='main__text-container'>
                <p className="main__text">{answerRu ? 'И ваш ответ:' : ''}</p>
                <h2 className="main__answer-text">{answerRu}</h2>
            </div>
            <img src={image} alt={answer} className="main__answer"></img>
        </main>
    ) : (
        <main className="main">
            <div className='main__preloader-box'>
                <div className="main__preloader">
                </div>
            </div>
        </main>
    )
}