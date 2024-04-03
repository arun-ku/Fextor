import { useState, useCallback, useEffect, useMemo } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
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
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "react-native-select-dropdown";
import ApiService from "../../helpers/ApiService";
import { addCategoryBulk } from "../../redux/slices/expense-categories";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  addExpense,
  editExpense,
  updateTotalExpenses,
} from "../../redux/slices/enpenses";

const EditExpense = () => {
  const { params } = useRoute();
  const categories = useSelector((state) => state.expenseCategories.categories);
  const totalExpenses = useSelector((state) => state.expenses.totalExpenses);
  const expenses = useSelector((state) => state.expenses.expenses);
  const currentExpense = useMemo(() => {
    return expenses.find((expense) => expense._id === params.expenseId);
  }, [expenses, params.expenseId]);
  const [amount, setAmount] = useState(currentExpense.amount.toString());
  const [title, setTitle] = useState(currentExpense.title);
  const [description, setDescription] = useState(currentExpense.description);
  const [category, setCategory] = useState(currentExpense.categoryId._id);
  const [isLoading, setIsLoading] = useState(false);
  const [addExpenseIsLoading, setAddExpenseIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getCategories = useCallback(async () => {
    if (!categories.length) {
      setIsLoading(true);
      try {
        const response = await ApiService.get("/api/expense-category/list");

        if (response.isSuccess) {
          dispatch(addCategoryBulk(response.data));
          setIsLoading(false);
        } else {
          setIsLoading(false);
          alert(response.data.message);
          navigation.goBack();
        }
      } catch (error) {
        setIsLoading(false);
        alert("Failed to fetch categories");
        navigation.goBack();
      }
    }
  }, [categories]);

  useEffect(() => {
    getCategories();
  }, []);

  const handleAmountChange = (amount) => {
    setAmount(amount.replace(/[^0-9]/g, ""));
  };

  const handleExpenceUpdate = async () => {
    try {
      if (!amount) {
        alert("Amount is required");
        return;
      } else if (!title) {
        alert("Title is required");
        return;
      } else if (!category) {
        alert("Category is required");
        return;
      }
      setAddExpenseIsLoading(true);
      const response = await ApiService.put(
        `/api/expense/update/${currentExpense._id}`,
        {
          amount: +amount,
          title,
          description,
          categoryId: category,
        }
      );

      if (response.isSuccess) {
        setAddExpenseIsLoading(false);
        dispatch(editExpense(response.data));
        dispatch(
          updateTotalExpenses(
            response.data.amount + totalExpenses - currentExpense.amount
          )
        );
        navigation.goBack();
      } else {
        setAddExpenseIsLoading(false);
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
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="#ffffff"
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
              Add Expense
            </Text>
          </View>
        </SafeAreaView>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <TextInput
            placeholder="Amount"
            style={styles.textInputs}
            value={amount}
            onChangeText={handleAmountChange}
          />
          <TextInput
            placeholder="Title"
            style={styles.textInputs}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            placeholder="Description"
            style={styles.textInputs}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />

          {!isLoading && (
            <SelectDropdown
              search
              searchPlaceHolderColor="Search Category"
              data={categories}
              onSelect={(selectedItem) => {
                setCategory(selectedItem._id);
              }}
              defaultValueByIndex={categories.findIndex(
                (cat) => cat._id === category
              )}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    {selectedItem && (
                      <MaterialIcons
                        name={selectedItem.categoryIcon}
                        color={selectedItem.iconColor}
                        size={24}
                      />
                    )}
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {(selectedItem && selectedItem.categoryName) ||
                        "Select Category"}
                    </Text>
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    key={index}
                    style={{
                      ...styles.dropdownItemStyle,
                      ...(isSelected && { backgroundColor: "#D2D9DF" }),
                    }}
                  >
                    <MaterialIcons
                      name={item.categoryIcon}
                      color={item.iconColor}
                      size={24}
                    />
                    <Text style={styles.dropdownItemTxtStyle}>
                      {item.categoryName}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
          )}

          <TouchableHighlight
            disabled={isLoading}
            onPress={handleExpenceUpdate}
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
                {addExpenseIsLoading ? "Updating..." : "Update Expense"}
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
  dropdownButtonStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
    marginLeft: 8,
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
    marginLeft: 8,
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default EditExpense;
