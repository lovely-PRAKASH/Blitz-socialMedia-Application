import "./leftBar.scss"
import userImg from "../../assets/profile/default-user.jpg"
import Friends from "../../assets/icons/1.png";
import Groups from "../../assets/icons/2.png";
import Market from "../../assets/icons/3.png";
import Watch from "../../assets/icons/4.png";
import Memories from "../../assets/icons/5.png";
import Events from "../../assets/icons/6.png";
import Gaming from "../../assets/icons/7.png";
import Gallery from "../../assets/icons/8.png";
import Videos from "../../assets/icons/9.png";
import Messages from "../../assets/icons/10.png";
import Tutorials from "../../assets/icons/11.png";
import Courses from "../../assets/icons/12.png";
import Fund from "../../assets/icons/13.png";
const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
          <img src={userImg} alt="" />
          <span>Prakash</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
