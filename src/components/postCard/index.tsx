import { memo } from "react";
import { IPost } from "../../types/Post";
import Modal from "../modal";
import ReportList from "../Report";
import LikeButton from "./LikeButton";
import BookmarkButton from "./BookmarkButton";
import { usePostCard } from "./usePostCard";

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

    const { handleToggleLike, handleToggleMark, showReport, handleReport, setShowReport,ReportReasons } = usePostCard(id);

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
            <div className="flex gap-2">
                <LikeButton liked={liked} onClick={handleToggleLike} />
                <BookmarkButton marked={marked} onClick={handleToggleMark} />
                <div><button
                    onClick={() => handleReport}
                    className="px-4 py-2 m-2  rounded bg-gray-200 dark:bg-gray-700"
                >
                    Report
                </button>
                </div>
            </div>


            <Modal
                title="The Report Reasons"
                content={<ReportList />}
                show={showReport}
                setShowReport={setShowReport}
            />

        </div>
    );
};

export default memo(PostCard);
