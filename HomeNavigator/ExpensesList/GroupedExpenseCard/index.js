import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import ExpenseCard from "../ExpenseCard";

const GroupedExpenseCard = ({ group }) => {
  const [isListingViewVisible, setIsListingViewVisible] = useState(false);
  return (
    <View
      style={{
        padding: 8,
        backgroundColor: "#3498db",
        marginHorizontal: 8,
        marginVertical: 4,
        borderRadius: 4,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name={group.icon} size={24} color={group.iconColor} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              marginLeft: 8,
              color: "#ffffff",
            }}
          >
            {group.name}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#ffffff",
            }}
          >
            ₹
            {new Intl.NumberFormat().format(group.amount, {
              style: "currency",
              currency: "INR",
            })}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setIsListingViewVisible(!isListingViewVisible);
            }}
          >
            <MaterialIcons
              name={
                isListingViewVisible ? "keyboard-arrow-down" : "chevron-right"
              }
              size={24}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>
      </View>
      {isListingViewVisible && (
        <View>
          {group.expenses.map((expense) => (
            <View
              key={expense._id}
              style={{
                justifyContent: "space-between",
                marginVertical: 4,
              }}
            >
              <ExpenseCard expense={expense} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default GroupedExpenseCard;
