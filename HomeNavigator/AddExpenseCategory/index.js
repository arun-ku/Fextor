import { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/slices/expense-categories";
import ApiService from "../../helpers/ApiService";
import IconsModal from "../../CommonComponents/IconsModal";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SelectDropdown from "react-native-select-dropdown";
import colors from "../../constants/colors";

const AddExpenseCategory = () => {
  const [ctName, setCtName] = useState("");
  const [ctIcon, setCtIcon] = useState("");
  const [iconColor, setIconColor] = useState(colors[0].color);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleExpenceCategoryAdd = async () => {
    try {
      if (!ctName) {
        alert("Category name is required");
        return;
      } else if (!ctIcon) {
        alert("Category icon is required");
        return;
      }
      setIsLoading(true);
      const response = await ApiService.post("/api/expense-category/create", {
        categoryName: ctName.trim(),
        categoryIcon: ctIcon,
        iconColor,
      });

      if (response.isSuccess) {
        dispatch(addCategory(response.data));
        setIsLoading(false);
        navigation.goBack();
      } else {
        setIsLoading(false);
        alert(response.data.message);
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openIconsModal = () => {
    setIsOpen(true);
  };

  const closeIconsModal = () => {
    setIsOpen(false);
  };

  const handleIconSelect = (icon) => {
    setCtIcon(icon);
    setIsOpen(false);
  };

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
              Add Expense Category
            </Text>
          </View>
        </SafeAreaView>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <TextInput
            placeholder="Category Name"
            style={styles.textInputs}
            value={ctName}
            onChangeText={setCtName}
          />
          <TouchableHighlight onPress={openIconsModal}>
            <View
              style={{
                padding: 8,
                backgroundColor: "#ffffff",
                borderRadius: 4,
                marginBottom: 16,
              }}
            >
              {ctIcon ? (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    Selected Icon:{" "}
                  </Text>
                  <MaterialIcons name={ctIcon} size={28} color={iconColor} />
                </View>
              ) : (
                <Text style={{ fontSize: 20, color: "#000000" }}>
                  Select Icon
                </Text>
              )}
            </View>
          </TouchableHighlight>

          {ctIcon && (
            <SelectDropdown
              data={colors}
              onSelect={(selectedItem) => {
                setIconColor(selectedItem.color);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    <Text style={styles.dropdownButtonTxtStyle}>
                      Icon Color{" "}
                    </Text>
                    {ctIcon && (
                      <MaterialIcons
                        name={ctIcon}
                        size={28}
                        color={iconColor}
                      />
                    )}
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    key={index}
                    style={{
                      ...styles.dropdownItemStyle,
                      ...(isSelected && { backgroundColor: "#D2D9DF" }),
                    }}
                  >
                    <MaterialIcons name={ctIcon} size={28} color={item.color} />
                    <Text
                      style={[
                        styles.dropdownItemTxtStyle,
                        { color: item.color },
                      ]}
                    >
                      {item.name}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
              defualtValueByIndex={colors.findIndex(
                (colorObj) => colorObj.color === iconColor
              )}
            />
          )}

          <TouchableHighlight
            disabled={isLoading}
            onPress={handleExpenceCategoryAdd}
          >
            <View
              style={{
                height: 50,
                backgroundColor: "#e67e22",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
              }}
            >
              <Text style={{ fontSize: 20, color: "#ffffff" }}>
                {isLoading ? "Adding..." : "Add Category"}
              </Text>
            </View>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
      {isOpen && (
        <IconsModal
          isOpen={isOpen}
          onClose={closeIconsModal}
          handleIconSelect={handleIconSelect}
          selectedIcon={ctIcon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputs: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#ffffff",
    borderColor: "#3498db",
    marginBottom: 16,
    fontSize: 20,
  },
  dropdownButtonStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default AddExpenseCategory;
