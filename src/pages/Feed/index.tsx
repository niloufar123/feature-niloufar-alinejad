import {  useMemo } from "react";
import PostCard from "../../components/PostCard";
import { IPost } from "../../types/Post";
import {useStore} from "../../store/useStore";

const Feed: React.FC = () => {
  const posts = useStore((state) => state.posts);
console.log('posts==>',posts);

  const postCount = useMemo(() => {
    return posts.length
  }, [posts]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts ({postCount})</h1>{" "}
      {posts.map((post:IPost) => (
        <PostCard
          key={post.id}
          id={post.id}
          author={post.author}
          content={post.content}
          image={post.image}
          liked={post.liked}
          marked={post.marked}

        />
      ))}
    </div>
  );
};

export default Feed;
