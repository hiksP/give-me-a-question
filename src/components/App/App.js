import './App.css';
import Header from '../Header/Header'
import AskForm from '../AskForm/AskForm'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Popup from '../Popup/Popup';
import {questionsApi} from '../../utils/api'
import {useState, useEffect} from 'react'

export default function   App() {

  const [image, setImgae] = useState();
  const [answer, setAnswer] = useState('');
  const [preloader, setPreloader] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);


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
      }, 3300)
    })
  }

  const popupHandler = () => {
    setPopupOpen(!popupOpen)
  }

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        setPopupOpen(false)
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => document.removeEventListener("keydown", handleEscClose);
  }, []); 


  return (
    <div className='page'>
      <Header popupHandler={popupHandler}></Header>
      <AskForm answerHandler={answerHandler}></AskForm>
      <Main answer={answer} image={image} preloader={preloader}></Main>
      <Footer></Footer>
      <Popup open={popupOpen} popupHandler={popupHandler}></Popup>
    </div>
  );
};