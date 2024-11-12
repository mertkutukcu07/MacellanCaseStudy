import { logout } from "@/redux/features/authSlice";
import { AppDispatch } from "@/redux/store";
import { AuthorizeStackParamList } from "@/navigation/stacks/AuthorizeStack";
import { NavigationProp } from "@react-navigation/native";
import { RouteNames } from "@/navigation/routeNames";
import { HomeAction } from "@/mocks/homeActionsData";
import { Linking } from "react-native";

export const useActionHandler = (
  dispatch: AppDispatch,
  navigation: NavigationProp<AuthorizeStackParamList>
) => {
  const handleActionPress = (value: HomeAction["value"]) => {
    switch (value) {
      case "logout":
        dispatch(logout());
        break;
      case "makePayment":
        navigation.navigate(RouteNames.MAKE_PAYMENT_SCREEN);
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
