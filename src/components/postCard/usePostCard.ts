import { useStore } from "../../store/useStore";

export const usePostCard = (id:number) => {
  const toggleLike = useStore((state) => state.toggleLike);
  const toggleMark = useStore((state) => state.toggleMark);

  const handleToggleLike = () => toggleLike(id);
  const handleToggleMark = () => toggleMark(id);

  return { handleToggleLike, handleToggleMark };
};