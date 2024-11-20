import React, { useState, useEffect, useRef } from "react";
import { CloseIcon } from "../../assets/icons";
import { usePostCard } from "../postCard/usePostCard";

interface ModalProps {
  title: string;
  content: React.ReactNode;
  show: boolean;
  setShowReport:any;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  show,
  setShowReport
//   className,
}) => {
  const [visible, setVisible] = useState(show);
  // const { setShowReport } = usePostCard(id);

  const contentClass = ` ${
    show
      ? "fixed top-0 left-0 bottom-0 right-0 h-full w-full bg-[#000000ab] z-[100] bg-opacity-50 inset-0 flex items-center justify-center overflow-hidden"
      : "overflow-hidden	 w-0 h-0 bg-transparent"
  } transition-colors duration-500 animation-fill "`;


  // useEffect(() => {
  //   console.log('show',show);
    
  //   if (show) {
  //     setVisible(true);
  //   } else {
  //     const timeout = setTimeout(() => setVisible(false), 300);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [show]);
  return (
    <div className={contentClass}>
     
        <div className="  bg-black  rounded-xl dark:dark:bg-gray-800 dark:text-white">
          <h5 className="flex text-xl font-semibold p-4 mb-4 text-gray-900 dark:text-white">
            <CloseIcon className="mx-2" click={()=>setShowReport(false)}/>
            {title}
          </h5>
          <div className="py-5 px-10 text-gray-700 dark:text-gray-300">{content}</div>
        </div>
    </div>
  );
};

export default Modal;
