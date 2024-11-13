import { Box } from '@/components/common'
import styled from 'styled-components/native'

export const BottomSection = styled(Box)`
    flex: 0.5;
    justify-content: space-between;
`

export const WalletItem = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    padding-horizontal: ${({ theme }) => theme.spacing.md};
    padding-vertical: ${({ theme }) => theme.spacing.lg};
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
`

export const UsagePointContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const UsagePointText = styled.Text`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.xxs};
    font-family: ${({ theme }) => theme.typography.fontFamily.regular};
`

export const WalletHeaderText = styled.Text`
    color: ${({ theme }) => theme.colors.text.light};
    font-size: ${({ theme }) => theme.typography.fontSize.xxs};
    font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`

export const WalletItemIcon = styled.View`
    width: 48px;
    height: 48px;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    justify-content: center;
    align-items: center;
`

export const WalletIconImage = styled.Image`
    width: 48px;
    height: 48px;
`

export const WalletTitleAndPoint = styled.View`
    flex: 1;
    gap: ${({ theme }) => theme.spacing.sm};
`

export const WalletTitle = styled.Text`
    color: ${({ theme }) => theme.colors.common.white};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`

export const PointValueContainer = styled.View`
    align-self: flex-start;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.point.background};
    padding-horizontal: ${({ theme }) => theme.spacing.sm};
    padding-vertical: ${({ theme }) => theme.spacing.xxs};
`

export const PointValue = styled.Text`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.xxs};
    font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`

export const WalletUserAmount = styled.Text`
    color: ${({ theme }) => theme.colors.common.white};
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
    font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`

export const BottomFooter = styled.View<{
    bottomFooter?: number
    px?: number
}>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${({ bottomFooter, theme }) =>
        bottomFooter ? bottomFooter : theme.spacing.md};
    padding-horizontal: ${({ px, theme }) => px || theme.spacing.md};
    border-top-width: 2px;
    border-top-color: ${({ theme }) => theme.colors.spending.stroke};
    padding-top: ${({ theme }) => theme.spacing.md};
`

export const SkipButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    font-family: ${({ theme }) => theme.typography.fontFamily.bold};
    text-decoration: underline;
`
