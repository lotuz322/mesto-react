import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import React from "react";
import ImagePopup from "./ImagePopup/ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatar] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const closeAllPopups = () => {
    setEditProfile(false);
    setAddPlace(false);
    setEditAvatar(false);
    setSelectedCard(null);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main onCardClick={handleCardClick} onEditProfile={() => setEditProfile(true)}
            onAddPlace={() => setAddPlace(true)}
            onEditAvatar={() => setEditAvatar(true)} />
      <Footer />

      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name={'edit-profile'} title={'Редактировать профиль'} textButton={'Создать'}>
          <input className="popup__item" id="name" type="text" name="name" required minLength="2" maxLength="40"
                 placeholder="Введите имя"/>
          <span className="popup__item-error name-error"></span>
          <input className="popup__item" id="about" type="text" name="about" required minLength="2" maxLength="200"
                 placeholder="Расскажите о себе"/>
          <span className="popup__item-error about-error"></span>
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name={'add-card'} title={'Новое место'} textButton={'Сохранить'}>
        <input className="popup__item" id="add-card-name" type="text" name="add-card-name" required minLength="2"
               maxLength="30" placeholder="Название места"/>
        <span className="popup__item-error add-card-name-error"> </span>
        <input className="popup__item" id="add-card-url" name="add-card-url" type="url" required
               placeholder="Ссылка на сайт"/>
        <span className="popup__item-error add-card-url-error"> </span>
      </PopupWithForm>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name={'update-avatar'} title={'Обновить аватар'} textButton={'Сохранить'}>
        <input className="popup__item" id="avatar" name="avatar" type="url" required
               placeholder="Ссылка изображение"/>
        <span className="popup__item-error avatar-error"> </span>
      </PopupWithForm>

      <PopupWithForm isOpen={false} name={'del-card'} title={'Вы уверены?'} textButton={'Да'}>
        <input className="popup__item" id="avatar" name="avatar" type="url" required
               placeholder="Ссылка изображение"/>
        <span className="popup__item-error avatar-error"> </span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
