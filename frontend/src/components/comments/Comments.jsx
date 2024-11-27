import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import moment from "moment";

const Comments = ({ postId }) => {
    const [desc, setDesc] = useState("");
    const { currentUser } = useContext(AuthContext);

    const queryClient = useQueryClient();

    // Fetch comments
    const { isLoading, error, data } = useQuery({
        queryKey: ["comments", postId],
        queryFn: () =>
            makeRequest.get(`/comments?postId=${postId}`).then((res) => res.data),
    });

    // Post comment mutation
    const mutation = useMutation({
        mutationFn: (newComment) => makeRequest.post("/comments", newComment),
        onSuccess: () => {
            queryClient.invalidateQueries(["comments", postId]); // Invalidate specific query
        },
    });

    const handleClick = (e) => {
        e.preventDefault();
        mutation.mutate({ desc, postId });
        setDesc("");
    };

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input
                    type="text"
                    placeholder="Write a Comment"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <button onClick={handleClick}>Send</button>
            </div>
            {!isLoading && !error && data?.length > 0 ? (
                data.map((comment) => (
                    <div className="comment" key={comment.id}>
                        <img src={comment.profilePic} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">{moment(comment.createdAt).fromNow()}</span>
                    </div>
                ))
            ) : isLoading ? (
                "Loading..."
            ) : error ? (
                <p>Error loading comments. Please try again later.</p>
            ) : (
                "No comments yet"
            )}
        </div>
    );
};

export default Comments;
