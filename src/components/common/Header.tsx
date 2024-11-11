import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${({ theme }) => theme.spacing.sm};
  padding-vertical: ${({ theme }) => theme.spacing.md};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.common.border};
`;

const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  flex: 1;
  text-align: center;
`;

const IconContainer = styled(TouchableOpacity)`
  min-width: 44px;
  justify-content: center;
  align-items: center;
`;

const EmptyContainer = styled.View`
  min-width: 44px;
`;

interface HeaderProps {
  title: string;
  leftIcon?: React.ReactNode;
  onLeftPress?: () => void;
  showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  leftIcon,
  onLeftPress,
  showBackButton = false,
}) => {
  const { top } = useSafeAreaInsets();

  return (
    <HeaderContainer style={{ paddingTop: top }}>
      {showBackButton ? (
        <IconContainer onPress={onLeftPress}>{leftIcon}</IconContainer>
      ) : (
        <EmptyContainer />
      )}

      <HeaderTitle>{title}</HeaderTitle>

      <EmptyContainer />
    </HeaderContainer>
  );
};
