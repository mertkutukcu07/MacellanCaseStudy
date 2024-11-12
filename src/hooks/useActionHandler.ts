import { logout } from "@/redux/features/authSlice";
import { AppDispatch } from "@/redux/store";
import { AuthorizeStackParamList } from "@/navigation/stacks/AuthorizeStack";
import { NavigationProp } from "@react-navigation/native";
import { RouteNames } from "@/navigation/routeNames";
import { HomeAction } from "@/mocks/homeActionsData";
import { Linking } from "react-native";
import { useCameraPermissions } from "expo-camera";
import { showToast } from "@/components/common/Toast";

export const useActionHandler = (
  dispatch: AppDispatch,
  navigation: NavigationProp<AuthorizeStackParamList>
) => {
  const [permission, requestPermission] = useCameraPermissions();

  const handleActionPress = async (value: HomeAction["value"]) => {
    switch (value) {
      case "logout":
        dispatch(logout());
        break;
      case "makePayment":
        const navigateToPayment = () =>
          navigation.navigate(RouteNames.MAKE_PAYMENT_SCREEN);

        if (permission?.status === "granted") {
          navigateToPayment();
          return;
        }

        if (permission?.status === "undetermined") {
          const { status } = await requestPermission();
          if (status === "granted") {
            navigateToPayment();
            return;
          }
        }

        showToast({
          title: "Kamera izni verilmedi",
          message: "Lütfen kamera izni veriniz",
        });
        break;
      case "uploadBalance":
        navigation.navigate(RouteNames.UPLOAD_BALANCE_SCREEN);
        break;
      case "appInfo":
        Linking.openURL("https://macellan.app/tr");
        break;
    }
  };

  return { handleActionPress };
};
