import { Alert } from "react-native";

interface ToastProps {
  title: string;
  message: string;
}

export const showToast = ({ title, message }: ToastProps) => {
  return Alert.alert(title, message);
};
