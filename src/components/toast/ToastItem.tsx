import { Toast } from "../../types/ToastTypes";
import { useToastContext } from "./ToastContext";

interface ToastItemProps {
  toast: Toast;
}

export const ToastItem: React.FC<ToastItemProps> = ({ toast }) => {
  const { removeToast } = useToastContext();

  const typeStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
  };

  return (
    <div
      className={`flex items-center px-4 py-3 rounded shadow-lg cursor-pointer ${
        typeStyles[toast.type || "info"]
      }`}
      onClick={() => removeToast(toast.id)}
    >
      <p className="text-sm">{toast.message}</p>
    </div>
  );
};
