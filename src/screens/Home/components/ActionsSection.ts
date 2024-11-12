import styled, { css } from "styled-components/native";

export const ActionsSection = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const ActionsItem = styled.TouchableOpacity<{
  backgroundColor: string;
  isStroke?: boolean;
  isLogout?: boolean;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 12px;
  padding-horizontal: ${({ theme }) => theme.spacing.md};
  justify-content: space-between;
  border: ${({ isStroke, theme }) =>
    isStroke ? `1px solid ${theme.colors.common.stroke}` : "none"};
  padding-vertical: ${({ theme }) => theme.spacing.md};
  ${({ isLogout }) =>
    isLogout &&
    css`
      width: 48px;
      height: 48px;
      padding: 0;
      align-items: center;
      justify-content: center;
    `}
`;

export const ActionsTitle = styled.Text<{ light?: boolean }>`
  color: ${({ light, theme }) =>
    light ? theme.colors.common.white : theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.xxs};
  margin-top: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
  width: 65px;
`;
