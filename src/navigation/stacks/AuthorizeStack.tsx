import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import React from "react";
import { RouteNames } from "../routeNames";
import HomeScreen from "@/screens/Home/HomeScreen";
import { MakePaymentScreen, UploadBalanceScreen } from "@/screens";

export type AuthorizeStackParamList = {
  [RouteNames.HOME_SCREEN]: undefined;
  [RouteNames.MAKE_PAYMENT_SCREEN]: undefined;
  [RouteNames.UPLOAD_BALANCE_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<AuthorizeStackParamList>();

const AuthorizeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteNames.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={RouteNames.MAKE_PAYMENT_SCREEN}
        component={MakePaymentScreen}
      />
      <Stack.Screen
        name={RouteNames.UPLOAD_BALANCE_SCREEN}
        component={UploadBalanceScreen}
      />
    </Stack.Navigator>
  );
};

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export type AuthorizeStackScreenProps<T extends keyof AuthorizeStackParamList> =
  NativeStackScreenProps<AuthorizeStackParamList, T>;

export default AuthorizeStack;
