// if (__DEV__) {
//   require("./src/devtools/ReactotronConfig");
// }

import { WSProvider } from "@/contexts/WSProvider";
import { AppNavigator } from "@/navigation/AppNavigator";
import { persistor, store } from "@/redux/store";
import { theme } from "@/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <WSProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GestureHandlerRootView>
              <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <AppNavigator />
              </SafeAreaProvider>
            </GestureHandlerRootView>
          </PersistGate>
        </Provider>
      </WSProvider>
    </ThemeProvider>
  );
}
