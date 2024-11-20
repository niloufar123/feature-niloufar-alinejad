import { FunctionComponent, useMemo } from "react";
import { useStore } from "../../store/useStore";
import { IPost } from "../../types/Post";
import PostCard from "../../components/PostCard";

interface BookMarksProps {

}

const BookMarks: FunctionComponent<BookMarksProps> = () => {
    const posts = useStore((state) => state.posts);
    const bookmarks = useMemo(
        () => posts.filter((post: IPost) => post.marked),
        [posts]
    );
    return (
        <div className="container mx-auto p-4">
            {
                bookmarks.length === 0 ?
                    <h1 className="text-2xl font-bold mb-4">There are no BookMarks </h1> :
                    <>
                        {bookmarks.map((post: IPost) => (
                            <PostCard
                                id={post.id}
                                key={post.id}
                                image={post.image}
                                liked={post.liked}
                                author={post.author}
                                content={post.content}
                                marked
                            />
                        ))}
                    </>
            }

        </div>
    );
}

export default BookMarks;