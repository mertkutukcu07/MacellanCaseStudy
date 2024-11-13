import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import React from "react";
import { RouteNames } from "../routeNames";
import HomeScreen from "@/screens/Home/HomeScreen";
import {
  EnterReferenceCodeScreen,
  MakePaymentScreen,
  SpendingScreen,
  UploadBalanceScreen,
} from "@/screens";
import { ReadQrResponse } from "@/types/readQr/response";

export type AuthorizeStackParamList = {
  [RouteNames.HOME_SCREEN]: undefined;
  [RouteNames.MAKE_PAYMENT_SCREEN]: undefined;
  [RouteNames.UPLOAD_BALANCE_SCREEN]: undefined;
  [RouteNames.SPENDING_SCREEN]: {
    spending: ReadQrResponse;
  };
  [RouteNames.ENTER_REFERENCE_CODE_SCREEN]: undefined;
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
      <Stack.Screen
        name={RouteNames.SPENDING_SCREEN}
        component={SpendingScreen}
      />
      <Stack.Screen
        name={RouteNames.ENTER_REFERENCE_CODE_SCREEN}
        component={EnterReferenceCodeScreen}
      />
    </Stack.Navigator>
  );
};

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export type AuthorizeStackScreenProps<T extends keyof AuthorizeStackParamList> =
  NativeStackScreenProps<AuthorizeStackParamList, T>;

export default AuthorizeStack;
