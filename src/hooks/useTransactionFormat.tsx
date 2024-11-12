import { CaptureIcon, TopUpIcon } from "@/assets/icons";
import { Activity } from "@/types/activityList/response";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

export const useTransactionFormat = (item: Activity) => {
  const getIcon = () => {
    return item.type === "top-up" ? (
      <TopUpIcon width={24} height={24} />
    ) : (
      <CaptureIcon width={24} height={24} />
    );
  };

  const getTitle = () => {
    return item.type === "top-up" ? "Bakiye Yükleme" : "Harcama";
  };

  const getAmount = () => {
    return `₺${item.amount}`;
  };

  const getFormattedDate = () => {
    return format(new Date(item.created_at), "d MMM • HH:mm", {
      locale: tr,
    });
  };

  return {
    getIcon,
    getTitle,
    getAmount,
    getFormattedDate,
  };
};
