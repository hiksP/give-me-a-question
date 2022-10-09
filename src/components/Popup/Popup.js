export default function Popup({open, popupHandler}) {
    return(
        <div className={open ? `popup popup_opened` : `popup`}>
            <div className='popup__overlay'></div>
            <div className='popup__container'>
                <button className='popup__close-button' onClick={popupHandler}></button>
                <div className="popup__text-container">
                    <p className='popup__text'>Как понятно из названия: сайту надо дать вопрос, но какой и зачем? Напишите в строку вопрос, на который
                    нужен ответ 'да' или 'нет' и получите его, а так же смешную гифку(или не очень) в подарок :)</p>
                </div>
            </div>
        </div>
    )
}