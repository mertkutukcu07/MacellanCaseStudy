import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  align-items: center;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
`;
