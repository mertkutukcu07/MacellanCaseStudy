import styled from "styled-components/native";

export const OTPInput = styled.TextInput<{
  activeInput: boolean;
  fillInput: string;
}>`
  width: 48px;
  height: 56px;
  background-color: ${({ activeInput, fillInput, theme }) =>
    activeInput || fillInput
      ? theme.colors.otpInput.activeColor
      : theme.colors.otpInput.inactiveColor};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ activeInput, fillInput, theme }) =>
    activeInput || fillInput
      ? theme.colors.common.white
      : theme.colors.otpInput.inactiveColor};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
  border: 1px solid ${({ theme }) => theme.colors.otpInput.stroke};
  border-color: ${({ activeInput, fillInput, theme }) =>
    activeInput || fillInput ? theme.colors.otpInput.stroke : "transparent"};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;
