import React, { memo } from "react";

interface BookmarkButtonProps {
  marked: boolean | undefined;
  onClick: () => void;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ marked, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 m-2 rounded ${
      marked ? "bg-green-700 text-white" : "bg-gray-200 dark:bg-gray-700"
    }`}
  >
    {marked ? "UnMark" : "Mark"}
  </button>
);

export default memo(BookmarkButton)