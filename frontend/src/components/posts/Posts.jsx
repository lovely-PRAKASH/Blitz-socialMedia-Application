import { makeRequest } from "../../../axios";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from '@tanstack/react-query';

const Posts = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => makeRequest.get("/posts").then((res) => res.data),
  });

  console.log(data);

  return (
    <div className="posts">
      {isLoading ? (
        <p style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Loading...</p>
      ) : error ? (
        <p style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Error loading posts.</p>
      ) : (
        data.map((post) => <Post post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Posts;
