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
  const [preloader, setPreloader] = useState(false);


  const answerHandler = () => {
    setPreloader(true)
    questionsApi.getAnswer()
    .then((res) => {
      setImgae(res.image)
      setAnswer(res.answer)
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      setTimeout(() => {
        setPreloader(false)
      }, 3000)
    })
  }

  return (
    <div className='page'>
      <Header></Header>
      <AskForm answerHandler={answerHandler}></AskForm>
      <Main answer={answer} image={image} preloader={preloader}></Main>
      <Footer></Footer>
    </div>
  );
};