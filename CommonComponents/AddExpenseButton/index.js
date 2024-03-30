import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/core";
import { Image, Text, TouchableHighlight, View } from "react-native";

const AddExpenseButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate("AddExpense");
      }}
      style={{ position: "absolute", bottom: 32, right: 32, borderRadius: 25 }}
    >
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 25,
          backgroundColor: "#e67e22",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="add" size={32} color="#ffffff" />
      </View>
    </TouchableHighlight>
  );
};

export default AddExpenseButton;
