import styled from "styled-components/native";
import { Box } from "./Box";
import { Label } from "./Typography";
import { TextInputProps } from "react-native";

export const InputField = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.input.background};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

interface FormInputProps extends TextInputProps {
  label: string;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  required,
  ...props
}) => {
  return (
    <Box gap={4}>
      <Label>
        {label} {required && "*"}
      </Label>
      <InputField {...props} />
    </Box>
  );
};
