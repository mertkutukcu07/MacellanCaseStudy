import React from 'react'
import styled from 'styled-components/native'
import Animated, {
    useAnimatedStyle,
    withSpring,
    interpolateColor,
} from 'react-native-reanimated'
import { TouchableWithoutFeedback } from 'react-native'
import { ActiveToggleIcon, InactiveToggleIcon } from '@/assets/icons'

const Container = styled(Animated.View)`
    width: 52px;
    height: 32px;
    padding: 2px;
    border-radius: 16px;
    border: 1.5px solid ${({ theme }) => theme.colors.toggle.stroke};
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`

const Circle = styled(Animated.View)<{ isEnabled: boolean }>`
    width: 16px;
    height: 16px;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme, isEnabled }) =>
        isEnabled
            ? theme.colors.toggle.activeColor
            : theme.colors.toggle.inactiveColor};
    justify-content: center;
    align-items: center;
`

interface ToggleProps {
    isEnabled: boolean
    onToggle: () => void
    activeColor?: string
    inactiveColor?: string
}

export const Toggle = ({
    isEnabled,
    onToggle,
    activeColor = '#F4364C',
    inactiveColor = 'transparent',
}: ToggleProps) => {
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withSpring(isEnabled ? 24 : 0) }],
        }
    })

    const containerAnimatedStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            isEnabled ? 1 : 0,
            [0, 1],
            [inactiveColor, activeColor]
        )

        return {
            backgroundColor,
        }
    })

    return (
        <TouchableWithoutFeedback onPress={onToggle}>
            <Container style={containerAnimatedStyle}>
                <Circle style={animatedStyles} isEnabled={isEnabled}>
                    {isEnabled ? <ActiveToggleIcon /> : <InactiveToggleIcon />}
                </Circle>
            </Container>
        </TouchableWithoutFeedback>
    )
}
