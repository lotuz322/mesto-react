import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';
import EditProfilePopup from "./EditProfilePopup/EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup/EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup/AddPlacePopup";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import React from "react";
import Api from "../utils/Api";


function App() {
  const [isEditProfilePopupOpen, setEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatar] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards , setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([Api.getProfile(), Api.getInitialCards()])
      .then(values => {
        setCurrentUser(values[0]);
        setCards(values[1]);
      })
      .catch()
      .finally();
  }, []);

  const closeAllPopups = () => {
    setEditProfile(false);
    setAddPlace(false);
    setEditAvatar(false);
    setSelectedCard(null);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const handleEditProfile = () => {
    setEditProfile(true);
  }

  const handleAddPlace = () => {
    setAddPlace(true);
  }

  const handleEditAvatar = () => {
    setEditAvatar(true);
  }

  const handleUpdateUser = (userUpdateObj) => {
    Api.editProfile(userUpdateObj)
      .then(updatedUser => setCurrentUser(updatedUser))
      .catch(err => console.log(err))
      .finally(() => closeAllPopups());
  }

  const handleUpdateAvatar = (url) => {
    Api.updateAvatar(url)
      .then(updatedUser => setCurrentUser(updatedUser))
      .catch(err => console.log(err))
      .finally(() => closeAllPopups());
  }

  const handleAddPlaceSubmit = (name, link) => {
    Api.addCard({name, link})
      .then(newCard => setCards([newCard, ...cards]))
      .catch(err => console.log(err))
      .finally(() => closeAllPopups());
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    if(isLiked) {
      Api.delLikes(card._id)
        .then(newCard => setCards(state => state.map((c) => c._id === card._id ? newCard : c)))
        .catch(err => console.log(err));
    } else {
      Api.addLikes(card._id)
        .then(newCard => setCards(state => state.map((c) => c._id === card._id ? newCard : c)))
        .catch(err => console.log(err));
    }
  }

  const handleDeleteCard = (card) => {
    Api.delCard(card._id)
      .then(response => setCards(state => state.filter(item => item._id !== card._id)))
      .catch(err => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onCardClick={handleCardClick}
              onEditProfile={handleEditProfile}
              onAddPlace={handleAddPlace}
              onEditAvatar={handleEditAvatar}
              onCardDelete={handleDeleteCard}
              onCardLike={handleCardLike}
              cards={cards} />
        <Footer />

        <EditProfilePopup onClose={closeAllPopups} onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} />

        <EditAvatarPopup onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} />

        <AddPlacePopup onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen}/>

        <PopupWithForm isOpen={false} name="del-card" title="Вы уверены?" textButton="Да">
          <input className="popup__item" id="avatar" name="avatar" type="url" required
                 placeholder="Ссылка изображение"/>
          <span className="popup__item-error avatar-error"> </span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
