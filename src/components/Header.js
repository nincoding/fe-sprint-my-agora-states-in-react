import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  
  return (
    <header>
    <div className="memu">
      <button type="button" className="memu-btn" id="writeBtn">
        <FontAwesomeIcon icon={faPenToSquare} id="write"/>
        <FontAwesomeIcon icon={faXmark} id='close'/>
      </button>
    </div>
      <h1>My Agora States</h1>
    </header>
  )
}

export default Header;