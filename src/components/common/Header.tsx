import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HeaderContainer = styled.View<{
    disableBorder?: boolean
    px?: number
}>`
    flex-direction: row;
    align-items: center;
    padding-vertical: ${({ theme }) => theme.spacing.md};
    padding-horizontal: ${({ px, theme }) => (px ? px : theme.spacing.xs)};
    border-bottom-width: ${({ disableBorder }) => (disableBorder ? 0 : 1)}px;
    border-bottom-color: ${({ theme }) => theme.colors.common.border};
`

const HeaderTitle = styled.Text`
    font-family: ${({ theme }) => theme.typography.fontFamily.bold};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.primary};
    flex: 1;
    text-align: center;
`

const IconContainer = styled(TouchableOpacity)`
    min-width: 44px;
    justify-content: center;
    align-items: center;
`

const EmptyContainer = styled.View`
    min-width: 44px;
`

interface HeaderProps {
    title?: string
    leftIcon?: React.ReactNode
    onLeftPress?: () => void
    showBackButton?: boolean
    disableBorder?: boolean
    px?: number
}

export const Header: React.FC<HeaderProps> = ({
    title,
    leftIcon,
    onLeftPress,
    showBackButton = false,
    disableBorder = false,
    px,
}) => {
    const { top } = useSafeAreaInsets()

    return (
        <HeaderContainer
            style={{ paddingTop: top }}
            disableBorder={disableBorder}
            px={px}>
            {showBackButton ? (
                <IconContainer onPress={onLeftPress}>{leftIcon}</IconContainer>
            ) : (
                <EmptyContainer />
            )}

            <HeaderTitle>{title}</HeaderTitle>

            <EmptyContainer />
        </HeaderContainer>
    )
}
