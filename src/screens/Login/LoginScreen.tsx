import React, { useState } from "react";
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
  SubTitle,
  Title,
} from "@/components/common";
import { useLoginMutation } from "@/services/api";
import { ErrorResponse, handleError } from "@/utils/errorHandler";

import { setCredentials } from "@/redux/features/authSlice";

interface LoginScreenProps
  extends AuthStackScreenProps<RouteNames.LOGIN_SCREEN> {}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [phone, setPhone] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const handleRegister = () => {
    navigation.navigate(RouteNames.REGISTER_SCREEN);
  };

  const handleLogin = async () => {
    try {
      await login({ phone_number: phone }).unwrap();
    } catch (error) {
      // Hata yönetimi burada yapılabilir
      console.error("Login error:", error);
    }
  };

  return (
    <Container>
      <Header title="Giriş Yap" />
      <Box mt={48} px={20} gap={36}>
        <Box gap={24}>
          <Title>Telefon Numaranı Gir</Title>
          <Description>
            Telefon numaranı girerek Macellan SuperApp hesabına giriş
            yapabilirsin.
          </Description>
        </Box>
        <FormInput
          label="Telefon Numarası"
          required
          placeholder="5** *** ** **"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          maxLength={10}
          autoFocus
        />
        <Button onPress={handleLogin} disabled={isLoading}>
          <ButtonText>Giriş Yap</ButtonText>
        </Button>
        <Box alignItems="center">
          <Description>
            Henüz hesabınız yok mu?{" "}
            <SubTitle onPress={handleRegister}>Üye Olun</SubTitle>
          </Description>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginScreen;
