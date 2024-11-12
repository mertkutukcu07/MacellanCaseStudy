import React from "react";
import { AuthorizeStackScreenProps } from "@/navigation/stacks/AuthorizeStack";
import { RouteNames } from "@/navigation/routeNames";
import { useGetActivityListQuery } from "@/services/api";
import { Box, Container } from "@/components/common";
import { TopSection } from "./components/TopSection";
import { UserAvatar, UserAvatarText } from "./components/UserInfoSection";
import { UserInfoSection } from "./components/UserInfoSection";
import { UserName } from "./components/UserInfoSection";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  BalanceTitle,
  BalanceValue,
  PointContainer,
  PointText,
} from "./components/BalanceSection";
import { homeActionsData } from "@/mocks/homeActionsData";
import { ActionList } from "./components/ActionList";
import { useActionHandler } from "@/hooks/useActionHandler";

interface HomeScreenProps
  extends AuthorizeStackScreenProps<RouteNames.HOME_SCREEN> {}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { top } = useSafeAreaInsets();
  const { data: activityList } = useGetActivityListQuery();
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const { handleActionPress } = useActionHandler(dispatch, navigation);

  return (
    <Container>
      <TopSection>
        <Box mt={top} px={20}>
          <UserInfoSection>
            <UserName>{`${user?.first_name} ${user?.last_name}`}</UserName>
            <UserAvatar>
              <UserAvatarText>{user?.first_name?.[0]}</UserAvatarText>
            </UserAvatar>
          </UserInfoSection>
          <Box gap={6} mt={24}>
            <BalanceTitle>BAKİYE</BalanceTitle>
            <BalanceValue>{`₺${user?.balance}`}</BalanceValue>
            <PointContainer>
              <PointText>{`Puan: ₺${user?.point}`}</PointText>
            </PointContainer>
          </Box>
          <Box>
            <ActionList actions={homeActionsData} onPress={handleActionPress} />
          </Box>
        </Box>
      </TopSection>
    </Container>
  );
};

export default HomeScreen;
