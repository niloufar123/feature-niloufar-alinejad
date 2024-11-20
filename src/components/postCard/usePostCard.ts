import { useState } from "react";
import { useStore } from "../../store/useStore";
import { ReportReasons } from "../../constants/Reasons";

export const usePostCard = (id: number) => {
    const toggleLike = useStore((state) => state.toggleLike);
    const toggleMark = useStore((state) => state.toggleMark);

    const [showReport, setShowReport] = useState<boolean>(false);
    const [selectedPost, setSelectedPost] = useState<number | null>(null);

    const handleToggleLike = () => toggleLike(id);
    const handleToggleMark = () => toggleMark(id);

    const handleReport = (id: number) => {
        setSelectedPost(id);
        setShowReport(true);
    };
    return { handleToggleLike, handleToggleMark, showReport, handleReport, selectedPost,setShowReport,ReportReasons };
};