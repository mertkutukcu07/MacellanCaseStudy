import React, { useState } from "react";
import { RouteNames } from "@/navigation/routeNames";
import { AuthorizeStackScreenProps } from "@/navigation/stacks/AuthorizeStack";
import {
  Box,
  Button,
  ButtonText,
  Container,
  Description,
  Header,
  Title,
} from "@/components/common";
import { ArrowLeftIcon } from "@/assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { CurrencySymbol } from "./components/uploadBalanceSection";
import { UploadBalanceInput } from "./components/uploadBalanceSection";
import { InputContainer } from "./components/uploadBalanceSection";
import { theme } from "@/theme";
import {
  WinPointSection,
  WinPointText,
  WinPointValue,
  WinPointValueContainer,
} from "./components/winPointSection";
import { recommandationsAmountData } from "@/mocks/recommandationsAmountData";
import {
  AmountButton,
  AmountText,
  RecommandationsAmountSection,
} from "./components/recommandationsAmountSection";
import { KeyboardAvoidingView } from "react-native";
import { isIOS } from "@/utils/platform";
import { useScoreGain } from "@/hooks/useScoreGain";
import { useTopUpMutation } from "@/services/api";
import { RecommandationAmountsList } from "./components/recommandationAmountsList";

interface UploadBalanceScreenProps
  extends AuthorizeStackScreenProps<RouteNames.UPLOAD_BALANCE_SCREEN> {}

const UploadBalanceScreen = ({ navigation }: UploadBalanceScreenProps) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [amount, setAmount] = useState(recommandationsAmountData[0].amount);
  const [topUp, { isLoading }] = useTopUpMutation();
  const dispatch = useDispatch<AppDispatch>();

  const handleTopUp = async () => {
    try {
      await topUp({ amount }).unwrap();
      navigation.goBack();
    } catch (error) {
      console.error("Bakiye yükleme hatası:", error);
    }
  };

  return (
    <Container>
      <Header
        title="Bakiye Yükleme"
        leftIcon={<ArrowLeftIcon width={44} />}
        showBackButton
        onLeftPress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView
        behavior={isIOS ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Box flex={1} px={20} justifyContent="space-between">
          <Box>
            <Box mt={48} gap={12}>
              <Title>Yükleme tutarı belirle</Title>
              <Description>
                İhtiyacın olan tutarı kendin belirleyebilirsin.
              </Description>
            </Box>
            <Box mt={16}>
              <InputContainer>
                <CurrencySymbol>₺</CurrencySymbol>
                <UploadBalanceInput
                  keyboardType="numeric"
                  placeholder="0"
                  placeholderTextColor={theme.colors.text.primary}
                  value={amount.toString()}
                  onChangeText={(text) => setAmount(Number(text))}
                  autoFocus
                />
              </InputContainer>
            </Box>
            <WinPointSection>
              <WinPointText>Kazanacağın hediye puan</WinPointText>
              <WinPointValueContainer>
                <WinPointValue>₺{useScoreGain({ amount })} Puan</WinPointValue>
              </WinPointValueContainer>
            </WinPointSection>
          </Box>

          <Box gap={16} mb={24}>
            <RecommandationAmountsList
              amount={amount}
              setAmount={setAmount}
              recommandationsAmountData={recommandationsAmountData}
            />
            <Button onPress={handleTopUp} disabled={isLoading}>
              <ButtonText>Yükle</ButtonText>
            </Button>
          </Box>
        </Box>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default UploadBalanceScreen;
