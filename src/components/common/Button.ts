import styled from "styled-components/native";

export const Button = styled.TouchableOpacity<{
  backgroundColor?: string;
  width?: string;
  mb?: number;
}>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  align-items: center;
  width: ${({ width }) => width || "100%"};
  margin-bottom: ${({ mb, theme }) => mb || theme.spacing.md}px;
`;

export const ButtonText = styled.Text<{ color?: string }>`
  color: ${({ color, theme }) => color || theme.colors.common.white};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
`;
