import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import { DataProvider } from "./src/context/DataProvider";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <DataProvider>
          <NavigationStack />
        </DataProvider>
      </NavigationContainer>
    </>
  );
}
