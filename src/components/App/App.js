import './App.css';
import Header from '../Header/Header'
import AskForm from '../AskForm/AskForm'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import {questionsApi} from '../../utils/api'
import {useState} from 'react'

export default function App() {

  const [image, setImgae] = useState()
  const [answer, setAnswer] = useState('')


  const answerHandler = () => {
    questionsApi.getAnswer()
    .then((res) => {
      setImgae(res.image)
      setAnswer(res.answer)
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      
    })
  }

  return (
    <div className='page'>
      <Header></Header>
      <AskForm answerHandler={answerHandler}></AskForm>
      <Main answer={answer} image={image}></Main>
      <Footer></Footer>
    </div>
  );
};