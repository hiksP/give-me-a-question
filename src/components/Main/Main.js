import {useState, useEffect} from 'react'

export default function Main({image, answer}) {

    const [answerRu, setAnswerRu] = useState('')

    useEffect(() => {
        if(answer === 'yes') {
            setAnswerRu('да')
        } else if(answer === 'no') {
            setAnswerRu('нет')
        } else if(answer === 'maybe') {
            setAnswerRu('возможно')
        } else setAnswerRu('')
    }, [answer])

    return (
        <main className="main">
            <div className='main__text-container'>
                <p className="main__text">{answerRu ? 'И ваш ответ:' : ''}</p>
                <h2 className="main__answer-text">{answerRu}</h2>
            </div>
            <img src={image} alt={answer} className="main__answer"></img>
        </main>
    )
}