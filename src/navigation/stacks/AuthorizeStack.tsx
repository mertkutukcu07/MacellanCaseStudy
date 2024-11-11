import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import React from "react";
import { RouteNames } from "../routeNames";
import HomeScreen from "@/screens/Home/HomeScreen";

export type AuthorizeStackParamList = {
  [RouteNames.HOME_SCREEN]: undefined;
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
    </Stack.Navigator>
  );
};

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export type AuthorizeStackScreenProps<T extends keyof AuthorizeStackParamList> =
  NativeStackScreenProps<AuthorizeStackParamList, T>;

export default AuthorizeStack;
