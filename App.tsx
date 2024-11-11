if (__DEV__) {
  require("./src/devtools/ReactotronConfig");
}

import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider
        initialMetrics={initialWindowMetrics}
      ></SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
