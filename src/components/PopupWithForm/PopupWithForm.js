
export default function PopupWithForm(props) {
  return(
    props.isOpen && <div className={`popup popup-${props.name} popup_opened`}>
      <form name={`popup-${props.name}`} className="popup__container popup__container_type_form" method="post" noValidate>
        <h2 className="popup__title">{props.title}</h2>
        <fieldset className="popup__input-container">
            {props.children}
        </fieldset>
        <button className="popup__submit-btn" type="submit">{props.textButton}</button>
        <button className="popup__close-btn" onClick={props.onClose} type="button"> </button>
      </form>
    </div>
  );
}
