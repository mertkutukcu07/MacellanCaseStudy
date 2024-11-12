import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { AuthStackScreenProps } from "@/navigation/stacks/AuthStack";
import { RouteNames } from "@/navigation/routeNames";
import {
  Box,
  Button,
  ButtonText,
  Container,
  Description,
  FormInput,
  Header,
  Title,
} from "@/components/common";
import { ArrowLeftIcon } from "@/assets/icons";
import { isIOS } from "@/utils/platform";
import { useRegisterMutation } from "@/services/api";
import { handleError } from "@/utils/errorHandler";
import { ErrorResponse } from "@/utils/errorHandler";

interface RegisterScreenProps
  extends AuthStackScreenProps<RouteNames.REGISTER_SCREEN> {}

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [register, { isLoading, error }] = useRegisterMutation();

  const handleRegister = async () => {
    await register({
      first_name: name,
      last_name: surname,
      phone_number: phone,
    });
  };

  useEffect(() => {
    if (error) {
      handleError(error as ErrorResponse);
    }
  }, [error]);

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={isIOS ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Header
          title="Üye Ol"
          leftIcon={<ArrowLeftIcon width={44} />}
          showBackButton
          onLeftPress={() => navigation.goBack()}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Box mt={48} px={20} gap={36}>
            <Box gap={24}>
              <Title>Kişisel Bilgilerini Gir</Title>
              <Description>
                Kişisel bilgilerini girerek üyeliğinizi oluşturabilirsiniz.
              </Description>
            </Box>
            <Box gap={24}>
              <FormInput
                label="Ad"
                required
                placeholder="Adınızı giriniz"
                value={name}
                onChangeText={setName}
              />
              <FormInput
                label="Soyad"
                required
                placeholder="Soyadınızı giriniz"
                value={surname}
                onChangeText={setSurname}
              />
              <FormInput
                label="Telefon Numarası"
                required
                placeholder="5** *** ** **"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                maxLength={10}
              />
            </Box>
            <Button onPress={handleRegister} disabled={isLoading}>
              <ButtonText>Üye Ol</ButtonText>
            </Button>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default RegisterScreen;
