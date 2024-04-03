import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect } from "react";
import ApiService from "../../helpers/ApiService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  setExpensesByCategories,
  setExpensesByUsers,
} from "../../redux/slices/analytics";

const Analytics = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getListByUsers = async () => {
    const response = await ApiService.get("/api/expense/listByUsers");
    if (response.isSuccess) {
      dispatch(setExpensesByUsers(response.data));
    } else {
      alert(response.data.message);
      navigation.goBack();
    }
  };

  const getListByCategories = async () => {
    const response = await ApiService.get("/api/expense/listByCategories");
    if (response.isSuccess) {
      dispatch(setExpensesByCategories(response.data));
    } else {
      alert(response.data.message);
      navigation.goBack();
    }
  };

  useEffect(() => {
    getListByUsers();
    getListByCategories();
  }, []);

  const expensesByCategories = useSelector(
    (state) => state.analytics.expensesByCategories
  );
  const expensesByUsers = useSelector(
    (state) => state.analytics.expensesByUsers
  );
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
              Analytics
            </Text>
          </View>
        </SafeAreaView>
      </View>
      <View style={{ flex: 1, backgroundColor: "#ecf0f1" }}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <View>
              <Text style={{ fontSize: 24, fontWeight: "700", padding: 16 }}>
                Expenses by Categories
              </Text>
              <View>
                {expensesByCategories.map((item, index) => (
                  <TouchableHighlight
                    style={{
                      margin: 8,
                      borderRadius: 8,
                    }}
                    key={index}
                    onPress={() => {
                      navigation.navigate("ExpensesList", {
                        category: item.category,
                      });
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: 16,
                        backgroundColor: "#ffffff",
                        borderRadius: 8,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <MaterialIcons
                          name={item.category.categoryIcon}
                          size={24}
                          color={item.category.iconColor}
                        />
                        <Text
                          style={{
                            marginLeft: 4,
                            fontSize: 20,
                            fontWeight: "600",
                          }}
                        >
                          {item.category.categoryName}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "600",
                          color: "#f39c12",
                        }}
                      >
                        ₹{item.totalAmount}
                      </Text>
                    </View>
                  </TouchableHighlight>
                ))}
              </View>
              <Text style={{ fontSize: 24, fontWeight: "700", padding: 16 }}>
                Expenses by Users
              </Text>
              <View>
                {expensesByUsers.map((item, index) => (
                  <TouchableHighlight
                    style={{
                      margin: 8,
                      borderRadius: 8,
                    }}
                    key={index}
                    onPress={() => {
                      navigation.navigate("ExpensesList", {
                        user: item.user,
                      });
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: 16,
                        backgroundColor: "#ffffff",
                        borderRadius: 8,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            marginLeft: 4,
                            fontSize: 20,
                            fontWeight: "600",
                          }}
                        >
                          {item.user.name}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "600",
                          color: "#f39c12",
                        }}
                      >
                        ₹{item.totalAmount}
                      </Text>
                    </View>
                  </TouchableHighlight>
                ))}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Analytics;
