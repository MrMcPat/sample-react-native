import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ todo }) {
  return (
    <TouchableOpacity>
      <Text style={styles.item}>{todo.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});