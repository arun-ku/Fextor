import { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import AddExpenseButton from "../../CommonComponents/AddExpenseButton";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const DASHBOARD_ITEMS = [
  {
    title: "Add Expense",
    icon: "format-list-bulleted-add",
    onPress: (navigation) => {
      // Navigate to AddExpenseCategory screen
      navigation.navigate("AddExpense");
    },
  },
  {
    title: "View Expenses",
    icon: "format-list-bulleted",
    onPress: (navigation) => {
      navigation.navigate("ExpensesList");
    },
  },
  {
    title: "Add New Member",
    icon: "person-add-alt",
    onPress: () => {
      // Navigate to AddFamilyMember screen
    },
  },
  {
    title: "Add Family",
    icon: "group-add",
    onPress: () => {
      // Navigate to AddFamily screen
    },
  },
  {
    title: "Add Category",
    icon: "playlist-add",
    onPress: (navigattion) => {
      navigattion.navigate("AddExpenseCategory");
    },
  },
  {
    title: "View Categories",
    icon: "list-alt",
    onPress: (navigattion) => {
      navigattion.navigate("ViewCategories");
    },
  },
  {
    title: "Analytics",
    icon: "analytics",
    onPress: (navigattion) => {
      navigattion.navigate("Analytics");
    },
  },
];

// AsyncStorage.setItem("token", "");

const DashBoard = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.setItem("token", "");
    navigation.navigate("Auth");
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#3498db" }}>
        <SafeAreaView>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              padding: 8,
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                marginTop: 12,
                color: "#ffffff",
                fontWeight: "700",
              }}
            >
              Dashboard
            </Text>
            <TouchableHighlight onPress={handleLogout}>
              <View
                style={{
                  padding: 8,
                  paddingVertical: 4,
                  borderWidth: 1,
                  borderColor: "#ffffff",
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}
                >
                  Logout
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {DASHBOARD_ITEMS.map((item, index) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    width: "50%",
                    padding: 8,
                  }}
                  key={index}
                >
                  <TouchableHighlight
                    style={{
                      width: "100%",
                      borderRadius: 8,
                    }}
                    onPress={() => item.onPress(navigation)}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        backgroundColor: "#f39c12",
                        width: "100%",
                        justifyContent: "space-evenly",
                        borderRadius: 8,
                        paddingVertical: 16,
                      }}
                    >
                      <MaterialIcons
                        name={item.icon}
                        size={50}
                        color="#3498db"
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          marginTop: 16,
                          color: "#ffffff",
                          fontWeight: "600",
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <AddExpenseButton />
      </SafeAreaView>
    </View>
  );
};

export default DashBoard;
