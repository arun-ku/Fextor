import { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/slices/expense-categories";
import ApiService from "../../helpers/ApiService";

const AddExpenseCategory = () => {
  const [ctName, setCtName] = useState("");
  const [ctIcon, setCtIcon] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleExpenceCategoryAdd = async () => {
    try {
      if (!ctName) {
        alert("Category name is required");
        return;
      } else if (!ctIcon) {
        alert("Category icon is required");
        return;
      }
      setIsLoading(true);
      const response = await ApiService.post("/api/expense-category/create", {
        categoryName: ctName.trim(),
        categoryIcon: ctIcon,
      });

      if (response.isSuccess) {
        dispatch(addCategory(response.data));
        setIsLoading(false);
        navigation.goBack();
      } else {
        setIsLoading(false);
        alert(response.data.message);
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#3498db" }}>
        <SafeAreaView>
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 8 }}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                style={{ height: 24, width: 16 }}
                source={{
                  uri: "https://img.icons8.com/?size=160&id=DUXX2N9ctKj4&format=png",
                }}
              />
            </TouchableWithoutFeedback>
            <Text
              style={{
                fontSize: 24,
                color: "#ffffff",
                padding: 8,
                fontWeight: "700",
                flex: 1,
              }}
            >
              Add Expense Category
            </Text>
          </View>
        </SafeAreaView>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <TextInput
            placeholder="Category Name"
            style={styles.textInputs}
            value={ctName}
            onChangeText={setCtName}
          />
          <TextInput
            placeholder="Category Icon"
            style={styles.textInputs}
            value={ctIcon}
            onChangeText={setCtIcon}
          />

          <TouchableHighlight
            disabled={isLoading}
            onPress={handleExpenceCategoryAdd}
          >
            <View
              style={{
                height: 50,
                backgroundColor: "#e67e22",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
              }}
            >
              <Text style={{ fontSize: 20, color: "#ffffff" }}>
                {isLoading ? "Adding..." : "Add Category"}
              </Text>
            </View>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputs: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#ffffff",
    borderColor: "#3498db",
    marginBottom: 16,
    fontSize: 20,
  },
});

export default AddExpenseCategory;
