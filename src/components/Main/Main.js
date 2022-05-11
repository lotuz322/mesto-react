import Api from "../../utils/Api";
import React from "react";
import Card from "../Card/Card";
import iconEdit from '../../images/icon-edit.svg';
import icon from '../../images/icon-edit.svg';

export default function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription , setUserDescription ] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards , setCards] = React.useState();

  React.useEffect(() => {
    Promise.all([Api.getProfile(), Api.getInitialCards()])
      .then(value => {
        setUserName(value[0].name);
        setUserDescription(value[0].about);
        setUserAvatar(value[0].avatar);
        setCards(value[1]);
      });
  }, [])
    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar">
                    <img className="profile__avatar-img" src={userAvatar} alt="аватар пользователя"/>
                    <div className="profile__overlay">
                        <img className="profile__avatar-edit-icon" src={iconEdit} onClick={props.onEditAvatar}/>
                    </div>
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__about-me">{userDescription}</p>
                    <button type="button" className="profile__edit-btn" onClick={props.onEditProfile}> </button>
                </div>
                <button type="button" className="profile__add-btn" onClick={props.onAddPlace}> </button>
            </section>

            <section className="photo-gallery">
              { cards && cards.map((item, i) => (
                <Card onCardClick={props.onCardClick} info={item} key={item._id} />
              ))}
            </section>
        </main>
    );
}

