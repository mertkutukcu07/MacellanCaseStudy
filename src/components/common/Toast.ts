import * as Burnt from "burnt";

interface ToastOptions {
  title: string;
  message?: string;
  preset?: "done" | "error" | "general";
  duration?: number;
}

export const showToast = ({
  title,
  message,
  preset = "general",
  duration = 2,
}: ToastOptions) => {
  Burnt.toast({
    title,
    message,
    preset: preset === "general" ? "none" : preset,
    duration,
  });
};
