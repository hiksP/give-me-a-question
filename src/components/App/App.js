import './App.css';
import Header from '../Header/Header'
import AskForm from '../AskForm/AskForm'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

export default function App() {
  return (
    <div className='page'>
      <Header></Header>
      <AskForm></AskForm>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};