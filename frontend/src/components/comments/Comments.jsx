import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import moment from "moment";

const Comments = ({ postId }) => {

    const { currentUser } = useContext(AuthContext)

    const { isLoading, error, data } = useQuery({
        queryKey: ["comments"], queryFn: () => {

            makeRequest.get("/comments?postId=" + postId).then((res) => {
                return res.data;
            })
        }
    })
    console.log(postId);
    console.log(data);
    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="write a Comment" />
                <button>Send</button>
            </div>
            {data ? data.map((comment) => (
                    <div className="comment">
                        <img src={comment.profilePicture} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">{moment(comment.createdAt).fromNow()}</span>
                    </div>
                ))
                : "loading..."
            }
        </div>
    )
}

export default Comments
