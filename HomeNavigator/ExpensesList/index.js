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
import ApiService from "../../helpers/ApiService";
import {
  addExpenseBulk,
  updateTotalExpenses,
} from "../../redux/slices/enpenses";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ExpenseCard from "./ExpenseCard";

const ExpensesList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getExpenses = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await ApiService.get("/api/expense/list");

      if (response.isSuccess) {
        dispatch(addExpenseBulk(response.data?.expenses || []));
        dispatch(updateTotalExpenses(response.data?.totalAmount || []));
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
  const totalExpenses = useSelector((state) => state.expenses.totalExpenses);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#3498db" }}>
        <SafeAreaView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 8,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "50%",
              }}
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
            <View style={{ paddingRight: 8 }}>
              <Text
                style={{ fontSize: 24, fontWeight: "600", color: "#ffffff" }}
              >
                ₹
                {new Intl.NumberFormat().format(totalExpenses, {
                  style: "currency",
                  currency: "INR",
                })}
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingTop: 8, paddingBottom: 24 }}
            >
              {expenses?.map((expense, index) => {
                return <ExpenseCard expense={expense} key={index} />;
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
