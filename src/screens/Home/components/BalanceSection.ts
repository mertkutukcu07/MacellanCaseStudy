import styled from "styled-components/native";

export const BalanceTitle = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
  opacity: 0.6;
  font-size: ${({ theme }) => theme.typography.fontSize.xxxs};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`;

export const BalanceValue = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
  font-size: ${({ theme }) => theme.typography.fontSize.xxxxxxl};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`;

export const PointContainer = styled.View`
  align-self: flex-start;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.point.background};
  padding-horizontal: ${({ theme }) => theme.spacing.md};
  padding-vertical: ${({ theme }) => theme.spacing.xs};
`;

export const PointText = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`;
