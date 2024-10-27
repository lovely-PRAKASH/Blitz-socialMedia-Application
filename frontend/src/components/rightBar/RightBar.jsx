import "./rightBar.scss"
import userImg from "../../assets/profile/default-user.jpg"

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="default profile" />
              <span>John wick</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="default profile" />
              <span>John wick</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="default profile" />
              <p><span>John wick</span>&nbsp;
                just changed the cover picture</p>
            </div> &nbsp;
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="default profile" />
              <p><span>John wick</span>&nbsp;
                just changed the cover picture</p>
            </div>&nbsp;
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="default profile" />
              <p><span>John wick</span>&nbsp;
                just changed the cover picture</p>
            </div>&nbsp;
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="default profile" />
              <p><span>John wick</span>&nbsp;
                just changed the cover picture</p>
            </div>&nbsp;
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="default profile" />
              <div className="online">
              </div>
                <span>John wick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="default profile" />
              <div className="online">
              </div>
                <span>John wick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="default profile" />
              <div className="online">
              </div>
                <span>John wick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="default profile" />
              <div className="online">
              </div>
                <span>John wick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="default profile" />
              <div className="online">
              </div>
                <span>John wick</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
