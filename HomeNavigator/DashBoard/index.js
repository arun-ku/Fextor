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

const DASHBOARD_ITEMS = [
  {
    title: "Add Expense",
    icon: "https://img.icons8.com/?size=128&id=abkCr2ie02rY&format=png",
    onPress: () => {
      // Navigate to AddExpenseCategory screen
    },
  },
  {
    title: "View Expenses",
    icon: "https://img.icons8.com/?size=96&id=20444&format=png",
    onPress: (navigation) => {
      navigation.navigate("ExpensesList");
    },
  },
  {
    title: "Add New Member",
    icon: "https://img.icons8.com/?size=100&id=NFY7OZ72blVL&format=png",
    onPress: () => {
      // Navigate to AddFamilyMember screen
    },
  },
  {
    title: "Add Family",
    icon: "https://img.icons8.com/?size=80&id=44535&format=png",
    onPress: () => {
      // Navigate to AddFamily screen
    },
  },
  {
    title: "Add Category",
    icon: "https://img.icons8.com/?size=100&id=KSazDyF1xvcs&format=png",
    onPress: (navigattion) => {
      navigattion.navigate("AddExpenseCategory");
    },
  },
  {
    title: "View Categories",
    icon: "https://img.icons8.com/?size=100&id=d732EC7UltbL&format=png",
    onPress: (navigattion) => {
      navigattion.navigate("ViewCategories");
    },
  },
];

const DashBoard = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <View style={{ backgroundColor: "#3498db" }}>
        <SafeAreaView>
          <Text
            style={{
              fontSize: 24,
              marginTop: 12,
              color: "#ffffff",
              padding: 8,
              fontWeight: "700",
            }}
          >
            Dashboard
          </Text>
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
                      <Image
                        style={{ height: 50, width: 50 }}
                        source={{ uri: item.icon }}
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
