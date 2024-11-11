import {
  LogoutIcon,
  AppInfoIcon,
  MakePaymentIcon,
  UploadBalanceIcon,
} from "@/assets/icons";
import { SvgProps } from "react-native-svg";

export type HomeAction = {
  icon: React.FC<SvgProps>;
  title?: string;
  value: "makePayment" | "uploadBalance" | "appInfo" | "logout";
  backgroundColor: string;
  isStroke?: boolean;
};

export const homeActionsData: HomeAction[] = [
  {
    icon: MakePaymentIcon,
    title: "Ödeme Yap",
    value: "makePayment",
    backgroundColor: "#FFFFFF",
    isStroke: false,
  },
  {
    icon: UploadBalanceIcon,
    title: "Bakiye Yükle",
    value: "uploadBalance",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    isStroke: false,
  },
  {
    icon: AppInfoIcon,
    title: "Uygulama Hakkında",
    value: "appInfo",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    isStroke: false,
  },
  {
    icon: LogoutIcon,
    value: "logout",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    isStroke: false,
  },
];
