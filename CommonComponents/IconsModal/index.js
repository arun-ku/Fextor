import {
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import materialIcons from "../../constants/materialIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState, useMemo } from "react";

const IconsModal = ({ isOpen, onClose, handleIconSelect, selectedIcon }) => {
  const [search, setSearch] = useState("");

  const fuzzySearchedIcons = useMemo(() => {
    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return materialIcons.filter((icon) =>
      icon
        .toLowerCase()
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        .includes(escapedSearch.toLowerCase())
    );
  }, [search]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#3498db" }}>
          <SafeAreaView>
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 8 }}
            >
              <TouchableWithoutFeedback
                onPress={() => {
                  onClose();
                }}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <MaterialIcons
                  name="arrow-back-ios-new"
                  color="#ffffff"
                  size={20}
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
                Select Icon
              </Text>
            </View>
          </SafeAreaView>
        </View>
        <TextInput
          placeholder="Search Icons"
          placeholderTextColor="#95a5a6"
          onChangeText={setSearch}
          value={search}
          style={{
            paddingHorizontal: 12,
            paddingVertical: 8,
            fontSize: 20,
            color: "#000",
            backgroundColor: "#fff",
          }}
        />
        <FlatList
          style={{ flex: 1 }}
          data={fuzzySearchedIcons}
          keyExtractor={(item) => item}
          renderItem={({ item: icon }) => {
            return (
              <TouchableHighlight onPress={() => handleIconSelect?.(icon)}>
                <View
                  style={{
                    padding: 8,
                    borderWidth: 2,
                    margin: 2,
                    borderColor: icon === selectedIcon ? "#f1c40f" : "#95a5a6",
                    borderRadius: 4,
                  }}
                  key={icon}
                >
                  <View style={{ height: 36, width: 36 }}>
                    <Icon
                      size={36}
                      color={icon === selectedIcon ? "#f1c40f" : "#95a5a6"}
                      name={icon.replaceAll("_", "-")}
                    />
                  </View>
                </View>
              </TouchableHighlight>
            );
          }}
          initialNumToRender={5}
          contentContainerStyle={{
            padding: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
          numColumns={6}
          maxToRenderPerBatch={5}
        />
      </View>
    </Modal>
  );
};

export default IconsModal;
