import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          // Alert.alert("My title", "My message", [
          //   { text: "Yes", onPress: () => console.log("Yes") },
          //   { text: "No", onPress: () => console.log("No") },
          // ])
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "red" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
