import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React from "react";
import { RouteNames } from "./routeNames";
import { AuthStack } from "./stacks";

export type AppStackParamList = {
  [RouteNames.AUTH_STACK]: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name={RouteNames.AUTH_STACK} component={AuthStack} />
    </Stack.Navigator>
  );
};

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export const AppNavigator = function AppNavigator(props: NavigationProps) {
  return (
    <NavigationContainer {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
