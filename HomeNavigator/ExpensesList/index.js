import { useEffect, useCallback, useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/core";
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
import AddExpenseButton from "../../CommonComponents/AddExpenseButton";
import GroupedExpenseCard from "./GroupedExpenseCard";

const ExpensesList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGroupView, setIsGroupView] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { params } = useRoute();

  const getExpenses = useCallback(async () => {
    setIsLoading(true);
    try {
      let response = null;
      if (params?.user) {
        response = await ApiService.get(
          `/api/expense/listByUser/${params.user._id}`
        );
      } else if (params?.category) {
        response = await ApiService.get(
          `/api/expense/listByCategory/${params.category._id}`
        );
      } else {
        response = await ApiService.get("/api/expense/list");
      }

      if (response?.isSuccess) {
        dispatch(addExpenseBulk(response.data?.expenses || []));
        dispatch(updateTotalExpenses(response.data?.totalAmount || []));
        setIsLoading(false);
      } else {
        setIsLoading(false);
        alert(response.data.message);
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("Failed to fetch expenses");
      navigation.goBack();
    }
  }, [params?.user, params?.category]);

  useEffect(() => {
    getExpenses();
  }, []);

  const expenses = useSelector((state) => state.expenses.expenses);
  const totalExpenses = useSelector((state) => state.expenses.totalExpenses);

  const groupedExpenses = useMemo(() => {
    const groupedExpenses = {};
    if (params?.user) {
      expenses?.forEach((expense) => {
        if (groupedExpenses[expense.categoryId?._id]) {
          groupedExpenses[expense.categoryId?._id].amount += expense.amount;
          groupedExpenses[expense.categoryId?._id].expenses.push(expense);
        } else {
          groupedExpenses[expense.categoryId?._id] = {
            name: expense.categoryId?.categoryName,
            icon: expense.categoryId?.categoryIcon,
            iconColor: expense.categoryId?.iconColor,
            amount: expense.amount,
            expenses: [expense],
          };
        }
      });
    } else if (params?.category) {
      expenses?.forEach((expense) => {
        if (groupedExpenses[expense.userId?._id]) {
          groupedExpenses[expense.userId?._id].amount += expense.amount;
          groupedExpenses[expense.userId?._id].expenses.push(expense);
        } else {
          groupedExpenses[expense.userId?._id] = {
            name: expense.userId?.name,
            icon: null,
            amount: expense.amount,
            expenses: [expense],
          };
        }
      });
    }

    return groupedExpenses;
  }, [expenses, params?.user, params?.category]);

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
              {isGroupView
                ? Object.values(groupedExpenses || {})?.map((group, index) => {
                    return <GroupedExpenseCard group={group} key={index} />;
                  })
                : expenses?.map((expense, index) => {
                    return <ExpenseCard expense={expense} key={index} />;
                  })}
            </ScrollView>
          )}
          {(!!params?.user || !!params?.category) && <AddExpenseButton />}
        </SafeAreaView>

        {params?.user || params?.category ? (
          <TouchableHighlight
            onPress={() => {
              setIsGroupView(!isGroupView);
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
                  {isGroupView ? "View All" : "Grouped View"}
                </Text>
              </View>
            </SafeAreaView>
          </TouchableHighlight>
        ) : (
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
        )}
      </View>
    </View>
  );
};

export default ExpensesList;
