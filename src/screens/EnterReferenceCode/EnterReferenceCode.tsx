import React, { useEffect, useRef, useState } from "react";
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
import { KeyboardAvoidingView } from "react-native";
import { InputContainer, OTPInput } from "./components/OTPInput";
import { TextInput } from "react-native";
import { useReadQRMutation } from "@/services/api";

interface EnterReferenceCodeProps
  extends AuthorizeStackScreenProps<RouteNames.ENTER_REFERENCE_CODE_SCREEN> {}

const EnterReferenceCode = ({ navigation }: EnterReferenceCodeProps) => {
  const inputRefs = useRef<TextInput[]>([]);
  const [readQR, { isLoading, isSuccess, data }] = useReadQRMutation();
  const OTP_LENGTH = 6;
  const OTP_INPUTS = Array.from({ length: OTP_LENGTH }, (_, i) => i);
  const [code, setCode] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text) {
      inputRefs.current[index + 1]?.focus();
    } else {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    setActiveIndex(index);
  };

  const handleSubmit = () => {
    if (!isLoading) {
      readQR({ reference_code: code.join("") });
    }
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
      <Header
        title="Kod Numarası Gir"
        leftIcon={<ArrowLeftIcon width={44} />}
        showBackButton
        onLeftPress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <Box flex={1} px={20} justifyContent="space-between">
          <Box mt={48} gap={12}>
            <Title>Referans Kodunu Gir</Title>
            <Description>
              Ödemeyi tamamlamak için ekranda gördüğünüz referans kodunu
              giriniz.
            </Description>
            <InputContainer>
              {OTP_INPUTS.map((index) => (
                <OTPInput
                  key={`otp-input-${index}`}
                  ref={(ref) => ref && (inputRefs.current[index] = ref)}
                  activeInput={activeIndex === index}
                  maxLength={1}
                  keyboardType="numeric"
                  fillInput={code[index]}
                  value={code[index]}
                  onChangeText={(text) => handleCodeChange(text, index)}
                  onFocus={() => handleFocus(index)}
                  autoFocus={index === 0}
                />
              ))}
            </InputContainer>
          </Box>
          <Button mb={24} onPress={handleSubmit}>
            <ButtonText>Ödemeyi Tamamla</ButtonText>
          </Button>
        </Box>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default EnterReferenceCode;
