import { memo } from "react";
import { IPost } from "../../types/Post";
import { usePostCard } from "./usePostCard";
import BookmarkButton from "./BookmarkButton";
import LikeButton from "./LikeButton";

interface PostCardProps {
    id: IPost["id"];
    image: IPost["image"];
    liked: IPost["liked"];
    author: IPost["author"];
    content: IPost["content"];
    marked?: IPost["marked"];
}

const PostCard: React.FC<PostCardProps> = ({
    id,
    author,
    content,
    image,
    liked,
    marked
}) => {

    const { handleToggleLike, handleToggleMark } = usePostCard(id);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4 mb-4">
            <h2 className="font-bold text-lg">{author}</h2>
            <p className="my-2">{content}</p>
            {image && (
                <img
                    src={image}
                    alt="Post"
                    className="w-full h-96 object-cover mb-2 rounded"
                />
            )}

            <LikeButton liked={liked} onClick={handleToggleLike} />
            <BookmarkButton marked={marked} onClick={handleToggleMark} />
        </div>
    );
};

export default memo(PostCard);
