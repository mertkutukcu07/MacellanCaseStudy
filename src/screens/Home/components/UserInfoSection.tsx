import styled from "styled-components/native";

export const UserInfoSection = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-right: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`;

export const UserAvatar = styled.View`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  align-items: center;
  justify-content: center;
`;

export const UserAvatarText = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`;
