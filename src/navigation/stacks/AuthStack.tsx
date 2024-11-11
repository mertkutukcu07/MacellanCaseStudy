import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import React from "react";
import { RouteNames } from "../routeNames";
import { LoginScreen, RegisterScreen } from "@/screens";

export type AuthStackParamList = {
  [RouteNames.LOGIN_SCREEN]: undefined;
  [RouteNames.REGISTER_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteNames.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={RouteNames.REGISTER_SCREEN}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export default AuthStack;
