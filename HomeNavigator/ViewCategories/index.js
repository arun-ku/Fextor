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
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ViewCategories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getCategories = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  const categories = useSelector((state) => state.expenseCategories.categories);

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
              Expense Categories
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
              {categories?.map((category, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 8,
                      backgroundColor: "#f39c12",
                      margin: 8,
                      marginBottom: 0,
                      borderRadius: 4,
                    }}
                    key={index}
                  >
                    <MaterialIcons
                      name={category.categoryIcon}
                      color={category.iconColor}
                      size={28}
                    />
                    <Text
                      style={{
                        fontSize: 24,
                        marginLeft: 16,
                        color: "#ffffff",
                        fontWeight: "600",
                      }}
                    >
                      {category.categoryName}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          )}
        </SafeAreaView>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("AddExpenseCategory");
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
                Add Category
              </Text>
            </View>
          </SafeAreaView>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ViewCategories;
