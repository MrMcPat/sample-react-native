import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ todo, handleDelete }) {
  return (
    <TouchableOpacity onPress={() => handleDelete(todo.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.itemText}>{todo.text}</Text>
      </View>
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
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 10,
  },
});
