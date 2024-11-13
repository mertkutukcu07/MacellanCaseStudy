import styled from 'styled-components/native'

export const WinPointSection = styled.View`
    gap: ${({ theme }) => theme.spacing.xs};
    flex-direction: row;
    align-items: center;
`

export const WinPointText = styled.Text`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.xxs};
    font-family: ${({ theme }) => theme.typography.fontFamily.regular};
`

export const WinPointValueContainer = styled.View`
    align-self: flex-start;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors.point.background};
    padding-horizontal: ${({ theme }) => theme.spacing.sm};
    padding-vertical: ${({ theme }) => theme.spacing.xxs};
`

export const WinPointValue = styled.Text`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.xxxs};
    font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`
