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
    

    return (
        <main className="main">
            <div className={preloader ? `main__preloader` : `main__preloader-box main__hidden`}></div>
            <div className={preloader ? `main__text-container main__hidden` : `main__text-container`}>
                <p className={preloader ? `main__text main__hidden` : `main__text`}>{answerRu ? 'И ваш ответ:' : ''}</p>
                <h2 className={preloader ? `main__answer-text main__hidden` : `main__answer-text`}>{answerRu}</h2>
            </div>
            <img src={image} alt={answer} className={preloader ? `main__answer main__hidden` : `main__answer`}></img>
        </main>
    );
}