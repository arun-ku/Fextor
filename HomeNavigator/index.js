import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashBoard from "./DashBoard";
import { useCallback, useEffect } from "react";
import ApiService from "../helpers/ApiService";
import { setIsLoading, setMetadata, setUser } from "../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import AddExpenseCategory from "./AddExpenseCategory";
import ViewCategories from "./ViewCategories";
import AddExpense from "./AddExpense";
import ExpensesList from "./ExpensesList";
import EditExpense from "./EditExpense";
import Analytics from "./Analytics";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const dispatch = useDispatch();
  const getUserData = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch(setIsLoading(true));
        const response = await ApiService.get("/api/user/me");

        if (response.isSuccess) {
          const { status, phoneNumber, name, families, _id } = response.data;
          dispatch(setUser({ status, phoneNumber, name, families, _id }));
          await AsyncStorage.setItem(
            "family",
            response.data?.families?.[0] || ""
          );
          dispatch(setIsLoading(false));
        } else {
          await AsyncStorage.setItem("token", "");
          dispatch(setIsLoading(false));

          navigation.navigate("Auth");
        }
      } else {
        navigation.navigate("Auth");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <>
      <Stack.Navigator
        initialRouteName="DashBoard"
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen
          name="AddExpenseCategory"
          component={AddExpenseCategory}
        />
        <Stack.Screen name="ViewCategories" component={ViewCategories} />
        <Stack.Screen name="AddExpense" component={AddExpense} />
        <Stack.Screen name="EditExpense" component={EditExpense} />
        <Stack.Screen name="ExpensesList" component={ExpensesList} />
        <Stack.Screen name="Analytics" component={Analytics} />
      </Stack.Navigator>

      <StatusBar barStyle="light-content" backgroundColor="#3498db" />
    </>
  );
};

export default HomeNavigator;
