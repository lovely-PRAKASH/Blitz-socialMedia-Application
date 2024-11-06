import { useContext } from "react"
import "./share.scss"
import { AuthContext } from "../../context/AuthContext"
import Image from "../../assets/icons/img.png";
import Map from "../../assets/icons/map.png";
import Friend from "../../assets/icons/friend.png";
const Share = () => {

    const {currentUser}=useContext(AuthContext)
  return (
    <div className="share">
      <div className="container">
        <div className="top">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder={`What's on Your Mind ${currentUser.name}`} />
        </div>
        <div className="bottom">
        <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>

            <div className="right">
                <button>share</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Share
