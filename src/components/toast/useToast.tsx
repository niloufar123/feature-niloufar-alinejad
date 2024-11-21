import { useToastContext } from "./ToastContext";

export const useToast = () => {
  const { addToast } = useToastContext();

  const showToast = (
    message: string,
    type: "success" | "error" | "info" | "warning" = "info",
    duration = 3000
  ) => {
    addToast({ message, type, duration });
  };

  return { showToast };
};
