import React, { useEffect } from "react";
import { AuthorizeStackScreenProps } from "@/navigation/stacks/AuthorizeStack";
import { RouteNames } from "@/navigation/routeNames";
import { BarcodeScanningResult, CameraView } from "expo-camera";
import { Button, ButtonText, Container } from "@/components/common";
import {
  ActivityIndicatorContainer,
  CameraFrame,
  FlashIconButton,
  FooterContainer,
  HeaderContainer,
  IconButton,
} from "./components/CameraFrame";
import { CameraOverlay } from "@/assets/images";
import { CloseIcon, FlashIcon } from "@/assets/icons";
import { useState } from "react";
import { height, width } from "@/utils/windowSize";
import { theme } from "@/theme";
import { useReadQRMutation } from "@/services/api";
import { ActivityIndicator } from "react-native";

interface MakePaymentScreenProps
  extends AuthorizeStackScreenProps<RouteNames.MAKE_PAYMENT_SCREEN> {}

const MakePaymentScreen = ({ navigation }: MakePaymentScreenProps) => {
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [readQR, { isLoading, isSuccess, data }] = useReadQRMutation();
  const handleBarcodeScanned = (result: BarcodeScanningResult) => {
    if (!isLoading) {
      readQR({ reference_code: result.data });
    }
  };

  const handleEnterReferenceCode = () => {
    navigation.navigate(RouteNames.ENTER_REFERENCE_CODE_SCREEN);
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.replace(RouteNames.SPENDING_SCREEN, {
        spending: data,
      });
    }
  }, [isSuccess]);

  return (
    <Container>
      <HeaderContainer>
        <IconButton onPress={() => navigation.goBack()}>
          <CloseIcon />
        </IconButton>
      </HeaderContainer>

      <CameraView
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        facing="back"
        flash={flashEnabled ? "on" : "off"}
        style={{ flex: 1 }}
        onBarcodeScanned={handleBarcodeScanned}
      />

      <FooterContainer marginBottom={16}>
        <FlashIconButton
          bottom={height / 6}
          onPress={() => setFlashEnabled(!flashEnabled)}
        >
          <FlashIcon />
        </FlashIconButton>

        <Button
          backgroundColor={theme.colors.common.white}
          onPress={handleEnterReferenceCode}
        >
          <ButtonText color={theme.colors.common.black}>
            Referans Kodu Gir
          </ButtonText>
        </Button>
      </FooterContainer>
      {isLoading && (
        <ActivityIndicatorContainer>
          <ActivityIndicator size="large" color={theme.colors.common.white} />
        </ActivityIndicatorContainer>
      )}
      <CameraFrame source={CameraOverlay} width={width} height={height} />
    </Container>
  );
};

export default MakePaymentScreen;
