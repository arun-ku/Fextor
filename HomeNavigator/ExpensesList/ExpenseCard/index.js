import { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { add, format, set } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import ApiService from "../../../helpers/ApiService";
import {
  addExpense,
  deleteExpense,
  updateTotalExpenses,
} from "../../../redux/slices/enpenses";
import { useNavigation } from "@react-navigation/native";

const ExpenseCard = ({ expense }) => {
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const totalExpenses = useSelector((state) => state.expenses.totalExpenses);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const showConfirmation = () => {
    setConfirmationVisible(true);
  };

  const closeConfirmation = () => {
    setConfirmationVisible(false);
  };

  const handleDelete = async () => {
    try {
      closeConfirmation();
      dispatch(deleteExpense(expense._id));
      dispatch(updateTotalExpenses(totalExpenses - expense.amount));

      const response = await ApiService.delete(
        `/api/expense/delete/${expense._id}`
      );

      if (!response.isSuccess) {
        alert("Failed to delete expense");
        dispatch(addExpense(expense));
        dispatch(updateTotalExpenses(totalExpenses + expense.amount));
      }
    } catch (error) {
      alert("Failed to delete expense");
      dispatch(addExpense(expense));
      dispatch(updateTotalExpenses(totalExpenses + expense.amount));
    }
  };

  const user = useSelector((state) => state.userInfo.userData);
  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        padding: 16,
        margin: 8,
        marginBottom: 0,
        borderRadius: 4,
      }}
    >
      {confirmationVisible ? (
        <View
          style={{
            height: 80,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text style={{}}>Are you sure you want to delete this expense?</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              marginTop: 16,
            }}
          >
            <TouchableHighlight onPress={closeConfirmation}>
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  backgroundColor: "#f39c12",
                }}
              >
                <Text style={{ color: "#ffffff", fontWeight: "600" }}>
                  Cancel
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={handleDelete}>
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  backgroundColor: "#3498db",
                }}
              >
                <Text style={{ color: "#ffffff", fontWeight: "600" }}>Yes</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
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
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
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

            <View style={{ marginTop: 4, fontWeight: "600" }}>
              <Text>
                {format(new Date(expense.createdAt), "dd/MM/yyyy - hh:mm aa")}
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            {user._id === expense.userId._id && (
              <View style={{ flexDirection: "row" }}>
                <TouchableHighlight
                  onPress={() => {
                    navigation.navigate("EditExpense", {
                      expenseId: expense._id,
                    });
                  }}
                  style={{ marginRight: 8 }}
                >
                  <MaterialIcons name="edit" size={24} color="#7f8c8d" />
                </TouchableHighlight>
                <TouchableHighlight onPress={showConfirmation}>
                  <MaterialIcons name="delete" size={24} color="#7f8c8d" />
                </TouchableHighlight>
              </View>
            )}
            <Text
              style={{
                fontSize: 24,
                marginLeft: 16,
                color: "#f39c12",
                fontWeight: "600",
                marginTop: user._id === expense.userId._id ? 8 : 32,
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
      )}
    </View>
  );
};

export default ExpenseCard;
