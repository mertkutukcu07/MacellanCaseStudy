import { theme } from "@/theme";
import styled from "styled-components/native";

interface AmountButtonProps {
  isSelected?: boolean;
  theme?: typeof theme;
}

export const RecommandationsAmountSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const AmountButton = styled.TouchableOpacity<AmountButtonProps>`
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors.recommendAmount.selectedAmount
      : props.theme.colors.common.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.common.border};
  flex: 1;
`;

export const AmountText = styled.Text<AmountButtonProps>`
  color: ${(props) =>
    props.isSelected
      ? props.theme.colors.primary
      : props.theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
  text-align: center;
`;
