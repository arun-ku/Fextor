import { useEffect, useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryBulk } from "../../redux/slices/expense-categories";
import ApiService from "../../helpers/ApiService";
import { addExpenseBulk } from "../../redux/slices/enpenses";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ExpensesList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getExpenses = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await ApiService.get("/api/expense/list");

      if (response.isSuccess) {
        dispatch(addExpenseBulk(response.data));
        setIsLoading(false);
      } else {
        setIsLoading(false);
        alert(response.data.message);
        navigation.goBack();
      }
    } catch (error) {
      setIsLoading(false);
      alert("Failed to fetch expenses");
      navigation.goBack();
    }
  }, []);

  useEffect(() => {
    getExpenses();
  }, []);

  const expenses = useSelector((state) => state.expenses.expenses);

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
              Expenses
            </Text>
          </View>
        </SafeAreaView>
      </View>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <ScrollView style={{ flex: 1, paddingVertical: 12 }}>
              {expenses?.map((expense, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 16,
                      backgroundColor: "#ffffff",
                      margin: 8,
                      marginBottom: 0,
                      borderRadius: 4,
                    }}
                    key={index}
                  >
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: 24,
                          color: "#000000",
                          fontWeight: "600",
                        }}
                      >
                        {expense.title}
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <MaterialIcons
                          name={expense.categoryId.categoryIcon}
                          size={16}
                          color={expense.categoryId.iconColor}
                        />
                        <Text
                          style={{
                            fontSize: 16,
                            marginLeft: 4,
                            color: "#000000",
                            fontWeight: "600",
                          }}
                        >
                          {expense.categoryId.categoryName}
                        </Text>
                      </View>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                      <Text
                        style={{
                          fontSize: 24,
                          marginLeft: 16,
                          color: "#f39c12",
                          fontWeight: "600",
                        }}
                      >
                        ₹{expense.amount}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          marginLeft: 16,
                          color: "#000000",
                          fontWeight: "600",
                        }}
                      >
                        {expense.userId.name}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          )}
        </SafeAreaView>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("AddExpense");
          }}
          style={{
            backgroundColor: "#f39c12",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SafeAreaView>
            <View
              style={{
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 24, color: "#ffffff", fontWeight: "600" }}
              >
                Add Expense
              </Text>
            </View>
          </SafeAreaView>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ExpensesList;
