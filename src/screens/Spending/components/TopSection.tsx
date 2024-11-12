import styled from "styled-components/native";
import { Box } from "@/components/common";

export const TopSection = styled(Box)`
  background-color: ${({ theme }) => theme.colors.spending.background};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.spending.stroke};
  flex: 0.5;
`;

export const SpendingValue = styled.Text`
  color: ${({ theme }) => theme.colors.common.black};
  font-size: ${({ theme }) => theme.typography.fontSize.xxxxxxl};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`;
