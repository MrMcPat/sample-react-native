import { useState } from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.key !== id));
  }

  function handleAdd(textInput) {
    if (textInput.length <= 3) {
      Alert.alert("OOPS!", "Please enter something specific.", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    } else {
      setTodos([{ text: textInput, key: Math.random().toString() }, ...todos]);
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handleAdd={handleAdd} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem todo={item} handleDelete={handleDelete} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
    // backgroundColor: "pink",
    flex: 1,
  },
  list: {
    marginTop: 20,
    // backgroundColor: "yellow",
    flex: 1,
  },
});
