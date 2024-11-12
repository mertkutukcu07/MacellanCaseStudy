import styled from "styled-components/native";

export const AccountMovementsHeader = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const AccountMovementsItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const AccountMovementsIcon = styled.View`
  background-color: ${({ theme }) =>
    theme.colors.accountMovements.iconBackground};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ theme }) => theme.spacing.sm};
`;

export const AccountMovementsTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const AccountMovementsIconAndTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const AccountMovementsInfo = styled.View`
  gap: ${({ theme }) => theme.spacing.xs};
  justify-content: center;
  align-items: flex-end;
`;

export const AccountMovementsPriceText = styled.Text<{
  type: "top-up" | "capture";
}>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
  color: ${({ theme, type }) =>
    type === "top-up"
      ? theme.colors.accountMovements.topUpText
      : theme.colors.text.primary};
`;

export const AccountMovementsDateAndClockText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.xxxs};
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
  color: ${({ theme }) => theme.colors.text.light};
`;

export const ItemSeparator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.common.border};
  margin-vertical: ${({ theme }) => theme.spacing.xs};
  left: ${({ theme }) => theme.spacing.xxxxxl};
  width: 100%;
`;
