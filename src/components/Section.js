import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBookBookmark, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Section = () => {
  
  return (
    <section className="form__container">
      <form action="" method="get" className="form" id="agora-form">
        <div className="form__input--wrapper">
          <div className="form__input--abata">
            <label for="abata" className="abata">
              <img src="image/abata1.png" name="avatar" className="avatar"></img>
              <img src="image/abata2.png" name="avatar" className="avatar"></img>
              <img src="image/abata3.png" name="avatar" className="avatar"></img>
              <img src="image/abata4.png" name="avatar" className="avatar"></img>
              <img src="image/abata5.png" name="avatar" className="avatar"></img>
            </label>
          </div>
          <div className="form__input--name">
            <label for="name"><FontAwesomeIcon icon={faCircleUser} className='i'/>닉네임 </label>
            <input type="text" name="name" id="input-name" required></input>
          </div>
          <div className="form__input--title">
            <label for="title"><FontAwesomeIcon icon={faBookBookmark} className='i'/>제목 </label>
            <input type="text" name="title" id="input-title" required></input>
          </div>
          <div className="form__textbox">
            <label for="story"><FontAwesomeIcon icon={faCommentDots} className='i'/>내용 </label>
            <textarea id="textarea-story" name="story" placeholder="질문을 작성하세요" required></textarea>
          </div>
        </div>
        <div className="form__submit">
          <input type="submit" value="질문하기" class="submitBox"></input>
        </div>
      </form>
    </section>
  )
}

export default Section;