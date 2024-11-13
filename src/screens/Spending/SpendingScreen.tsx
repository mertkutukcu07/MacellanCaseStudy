import React, { useState, useEffect } from "react";
import { AuthorizeStackScreenProps } from "@/navigation/stacks/AuthorizeStack";
import { RouteNames } from "@/navigation/routeNames";
import {
  Box,
  Button,
  ButtonText,
  Container,
  Description,
  Header,
  Title,
} from "@/components/common";
import { SpendingValue, TopSection } from "./components/TopSection";
import { ArrowLeftIcon, WalletIcon } from "@/assets/icons";
import {
  BottomFooter,
  BottomSection,
  PointValue,
  PointValueContainer,
  SkipButtonText,
  UsagePointContainer,
  UsagePointText,
  WalletHeaderText,
  WalletIconImage,
  WalletItem,
  WalletItemIcon,
  WalletTitle,
  WalletTitleAndPoint,
  WalletUserAmount,
} from "./components/BottomSection";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import Toggle from "@/components/common/Toggle";
import { api, useApproveMutation } from "@/services/api";
import { useWS } from "@/contexts/WSProvider";
import { ApproveResponse } from "@/types/approve/response";
import { setCredentials } from "@/redux/features/authSlice";
import { theme } from "@/theme";
import { ActivityIndicator } from "react-native";

interface SpendingScreenProps
  extends AuthorizeStackScreenProps<RouteNames.SPENDING_SCREEN> {}

const SpendingScreen = ({ route, navigation }: SpendingScreenProps) => {
  const { spending } = route.params || {};
  const { bottom } = useSafeAreaInsets();
  const { user, token } = useSelector((state: RootState) => state.auth);
  const [isUsagePoint, setIsUsagePoint] = useState(false);
  const [approve, { isLoading }] = useApproveMutation();
  const [completedLoading, setCompletedLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const ws = useWS();

  const handleToggle = () => {
    setIsUsagePoint(!isUsagePoint);
  };

  const handleCompletedEvent = async (data: ApproveResponse) => {
    if (data.status === "completed") {
      try {
        const [meResult, activityResult] = await Promise.all([
          dispatch(
            api.endpoints.getMe.initiate(undefined, {
              forceRefetch: true,
            })
          ),
          dispatch(
            api.endpoints.getActivityList.initiate(undefined, {
              forceRefetch: true,
            })
          ),
        ]);

        if (meResult.data) {
          dispatch(
            setCredentials({
              token: token || "",
              user: meResult.data,
            })
          );
        }

        navigation.navigate(RouteNames.HOME_SCREEN);
      } catch (error) {
        console.error("Veri güncelleme hatası:", error);
      } finally {
        setCompletedLoading(false);
      }
    }
  };

  const handlePay = async () => {
    if (!spending?.reference_code) {
      console.error("Reference code bulunamadı");
      return;
    }

    try {
      const result = await approve({
        reference_code: spending.reference_code,
        point_usage: isUsagePoint,
      }).unwrap();

      if (result) {
        console.log("Ödeme onaylandı:", result);
        ws.emit("join", result.user_id);
        setCompletedLoading(true);
      }
    } catch (error) {
      console.error("Ödeme hatası:", error);
    }
  };

  useEffect(() => {
    ws.on("completed", handleCompletedEvent);

    return () => {
      ws.off("completed");
    };
  }, []);

  return (
    <Container>
      <TopSection>
        <Header
          leftIcon={<ArrowLeftIcon width={44} />}
          showBackButton
          onLeftPress={() => navigation.goBack()}
          disableBorder
          px={0}
        />
        <Box mt={24} gap={12} px={20}>
          <Title>Ödenecek tutar</Title>
          <Description>Ödeme bilgilerine lütfen dikkat edin</Description>
        </Box>
        <Box mt={36} px={20}>
          <SpendingValue>{`₺${spending?.amount}`}</SpendingValue>
        </Box>
      </TopSection>
      <BottomSection>
        <Box px={20} mt={48} gap={12}>
          <WalletHeaderText>CÜZDAN</WalletHeaderText>
          <WalletItem>
            <WalletItemIcon>
              <WalletIconImage source={WalletIcon} />
            </WalletItemIcon>
            <WalletTitleAndPoint>
              <WalletTitle>Macellan Cüzdan</WalletTitle>
              <PointValueContainer>
                <PointValue>Puan: ₺{user?.point}</PointValue>
              </PointValueContainer>
            </WalletTitleAndPoint>
            <WalletUserAmount>₺{user?.balance}</WalletUserAmount>
          </WalletItem>
          <UsagePointContainer>
            <UsagePointText>Hediye puanlarımı kullan</UsagePointText>
            <Toggle isEnabled={isUsagePoint} onToggle={handleToggle} />
          </UsagePointContainer>
        </Box>
        <BottomFooter bottomFooter={bottom}>
          <SkipButtonText onPress={() => navigation.goBack()}>
            Vazgeç
          </SkipButtonText>
          <Button
            width="160px"
            onPress={handlePay}
            disabled={completedLoading || isLoading}
          >
            {completedLoading || isLoading ? (
              <ActivityIndicator
                size="small"
                color={theme.colors.common.white}
              />
            ) : (
              <ButtonText>Öde</ButtonText>
            )}
          </Button>
        </BottomFooter>
      </BottomSection>
    </Container>
  );
};

export default SpendingScreen;
