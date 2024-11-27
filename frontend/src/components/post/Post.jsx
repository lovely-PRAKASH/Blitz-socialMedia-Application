import "./post.scss"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
const Post = ({ post }) => {
  const [openComments, setOpenComments]=useState(false);

  const { isLoading, error, data } = useQuery({
    queryKey: ['likes', post.id],
    queryFn: () => makeRequest.get("/likes?postId="+post.id).then((res) => (res.data)),
  });
  console.log("likes",data);
  
  return (
    <div className='post'>
      <div className="container">
      <div className="user">
        <div className="userInfo">
          <img src={post.profilePic} alt="" />
          <div className="details">
            <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
            <span className="name">{post.name}</span>
            </Link>
            <span>{moment(post.createdAt).fromNow()}</span>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img src={"./upload/"+post.img} alt="" />
      </div>
      <div className="info">
        <div className="item">
          {/* {liked ? <FavoriteOutlinedIcon style={{color:"red"}}/> : <FavoriteBorderOutlinedIcon/>} */}
        {data?.length} Likes
        </div>
        <div className="item" onClick={()=>setOpenComments(!openComments)}>
          <TextsmsOutlinedIcon/>
          12 Comments
        </div>
        <div className="item">
          <ShareOutlinedIcon/>
          Share
        </div>
      </div>
      {openComments&&<Comments postId={post.id}/>}
      </div>

    </div>
  )
}

export default Post
