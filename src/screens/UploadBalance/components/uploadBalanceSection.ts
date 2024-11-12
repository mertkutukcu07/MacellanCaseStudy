import styled from "styled-components/native";

export const UploadBalanceSection = styled.View`
  gap: ${({ theme }) => theme.spacing.md};
`;

export const UploadBalanceInput = styled.TextInput`
  padding: ${({ theme }) => theme.spacing.md};
  padding-left: 40px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.xxxxxxl};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`;

export const InputContainer = styled.View`
  position: relative;
  width: 100%;
`;

export const CurrencySymbol = styled.Text`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.xxxxxxl};
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
`;
