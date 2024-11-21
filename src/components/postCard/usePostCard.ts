import { useState } from "react";
import { useStore } from "../../store/useStore";
import { ReportReasons } from "../../constants/Reasons";
import { useToast } from "../toast/useToast";

export const usePostCard = (id: number) => {
    const { showToast } = useToast();
    const posts = useStore((state) => state.posts);
    const post= posts.find(item => item.id === id);

    const toggleLike = useStore((state) => state.toggleLike);
    const toggleMark = useStore((state) => state.toggleMark);

    const [showReport, setShowReport] = useState<boolean>(false);
    const [selectedPost, setSelectedPost] = useState<number | null>(null);

    const handleToggleLike = () => toggleLike(id);
    const handleToggleMark = () =>{         
        if(!post.marked){
            showToast('Post Marked!', 'success')

        }else  showToast('Post UnMarked!', 'error')
        toggleMark(id)};

    const handleReport = (id: number) => {        
        setSelectedPost(id);
        setShowReport(!showReport);
    };
    return { handleToggleLike, handleToggleMark, showReport, handleReport, selectedPost,setShowReport,ReportReasons };
};