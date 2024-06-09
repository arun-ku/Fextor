import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useMemo, useState } from "react";
import {
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from "react-native-select-dropdown";

const SetDateModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(() => {
    const date = new Date();
    return date.getMonth();
  });
  const [currentYear, setCurrentYear] = useState(() => {
    const date = new Date();
    return date.getFullYear();
  });

  const setCurrentMonthTime = async () => {
    const savedTime = await AsyncStorage.getItem("currentMonth");
    if (savedTime) {
      setCurrentMonth(+savedTime);
    }
  };

  const setCurrentYearTime = async () => {
    const savedTime = await AsyncStorage.getItem("currentYear");
    if (savedTime) {
      setCurrentYear(+savedTime);
    }
  };

  useEffect(() => {
    setCurrentMonthTime();
    setCurrentYearTime();
  }, []);

  const handleCurrentMonthChange = (val) => {
    setCurrentMonth(+val);
    AsyncStorage.setItem("currentMonth", `${val}`);
  };

  const handleCurrentYearChange = (val) => {
    setCurrentMonth(+val);
    AsyncStorage.setItem("currentYear", `${val}`);
  };

  const yearsArray = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const startYear = 2024;
    const years = [];
    for (let i = startYear; i <= currentYear; i++) {
      years.push(i);
    }
    return years;
  }, []);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#3498db",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setIsModalVisible(true);
        }}
        style={{
          padding: 8,
          paddingVertical: 4,
          borderWidth: 1,
          borderColor: "#ffffff",
        }}
      >
        <Text
          style={{ fontWeight: "500", color: "#ffffff", fontSize: 16 }}
        >{`${currentMonth}/${currentYear}`}</Text>
      </TouchableOpacity>
      {isModalVisible && (
        <Modal
          style={{}}
          transparent
          onRequestClose={() => {
            setIsModalVisible(false);
          }}
        >
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <View
              style={{
                width: "80%",
                borderRadius: 8,
                backgroundColor: "#ffffff",
                justifyContent: "center",
                padding: 12,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                Select Month and Year
              </Text>
              <SelectDropdown
                searchPlaceHolderColor="Select Month"
                data={[...new Array(12)].map((_, index) => {
                  return index + 1;
                })}
                onSelect={(selectedItem) => {
                  handleCurrentMonthChange(selectedItem);
                }}
                renderButton={(selectedItem, isOpened) => {
                  return (
                    <View style={{ marginTop: 16 }}>
                      <Text style={{}}>{selectedItem || "Select Month"}</Text>
                    </View>
                  );
                }}
                renderItem={(item, index, isSelected) => {
                  return (
                    <View
                      key={index}
                      style={{
                        ...{ padding: 8 },
                        ...(isSelected && {
                          backgroundColor: "red",
                        }),
                      }}
                    >
                      <Text style={{ fontWeight: isSelected ? "700" : "500" }}>
                        {item}
                      </Text>
                    </View>
                  );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={{}}
                defaultValue={currentMonth}
              />
              <SelectDropdown
                searchPlaceHolderColor="Select Year"
                data={yearsArray}
                onSelect={(selectedItem) => {
                  handleCurrentYearChange(selectedItem);
                }}
                renderButton={(selectedItem, isOpened) => {
                  return (
                    <View style={{ marginTop: 16 }}>
                      <Text style={{}}>{selectedItem || "Select Year"}</Text>
                    </View>
                  );
                }}
                renderItem={(item, index, isSelected) => {
                  return (
                    <View
                      key={index}
                      style={{
                        ...{ padding: 8 },
                        ...(isSelected && {
                          backgroundColor: "red",
                        }),
                      }}
                    >
                      <Text style={{ fontWeight: isSelected ? "700" : "500" }}>
                        {item}
                      </Text>
                    </View>
                  );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={{}}
                defaultValue={currentYear}
              />
              <TouchableOpacity
                onPress={() => {
                  setIsModalVisible(false);
                }}
              >
                <View
                  style={{ width: "100%", alignItems: "center", padding: 8 }}
                >
                  <Text>Close</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default SetDateModal;
