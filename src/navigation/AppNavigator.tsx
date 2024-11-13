import { NavigationContainer } from '@react-navigation/native'
import {
    NativeStackScreenProps,
    createNativeStackNavigator,
} from '@react-navigation/native-stack'
import React from 'react'
import { RouteNames } from './routeNames'
import { AuthorizeStack, AuthStack } from './stacks'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export type AppStackParamList = {
    [RouteNames.AUTH_STACK]: undefined
    [RouteNames.AUTHORIZE_STACK]: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()
const AppStack = () => {
    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}>
            {user ? (
                <Stack.Screen
                    name={RouteNames.AUTHORIZE_STACK}
                    component={AuthorizeStack}
                />
            ) : (
                <Stack.Screen
                    name={RouteNames.AUTH_STACK}
                    component={AuthStack}
                />
            )}
        </Stack.Navigator>
    )
}

export interface NavigationProps
    extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export type AppStackScreenProps<T extends keyof AppStackParamList> =
    NativeStackScreenProps<AppStackParamList, T>

export const AppNavigator = function AppNavigator(props: NavigationProps) {
    return (
        <NavigationContainer {...props}>
            <AppStack />
        </NavigationContainer>
    )
}
