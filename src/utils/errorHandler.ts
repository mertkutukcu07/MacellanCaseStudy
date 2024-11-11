import { showToast } from "@/components/common/Toast";

export type ErrorResponse = {
  status: number;
  data: {
    message: string;
  };
};

export const handleError = (error: ErrorResponse) => {
  showToast({ title: "Hata", message: error.data.message });
};
