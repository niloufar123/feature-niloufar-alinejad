import React, { memo } from "react";

interface LikeButtonProps {
  liked: boolean;
  onClick: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ liked, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 m-2 rounded ${
      liked ? "bg-red-500 text-white" : "bg-gray-200 dark:bg-gray-700"
    }`}
  >
    {liked ? "Unlike" : "Like"}
  </button>
);

export default memo(LikeButton);