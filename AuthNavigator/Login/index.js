import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { Quicksand_600SemiBold } from "@expo-google-fonts/quicksand";
import { useFonts } from "expo-font";
import ApiService from "../../helpers/ApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({ Quicksand_600SemiBold });

  const handlePhoneChange = (e) => {
    setPhoneNumber(e);
  };
  const handlePasswordChange = (e) => {
    setPassword(e);
  };
  const handleRegisterPress = () => {
    // Navigate to Register screen
    navigation.navigate("Register");
  };

  const handleLogin = async () => {
    if (!phoneNumber) {
      alert("Phone number is required");
      return;
    } else if (!password) {
      alert("Password is required");
      return;
    }
    // Perform login

    const response = await ApiService.post("/api/auth/login", {
      phoneNumber,
      password,
    });

    if (response.isSuccess) {
      // Save token to AsyncStorage
      await AsyncStorage.setItem("token", response.data.token);
      // Navigate to Home screen

      navigation.navigate("Home");
    }
  };

  return (
    <View style={{ backgroundColor: "#3498db", flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 48,
            color: "#fff",
            marginTop: 24,
            fontWeight: "700",
            fontFamily: fontsLoaded ? "Quicksand_600SemiBold" : "",
          }}
        >
          Fextor
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ width: "80%", flex: 1, justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "white",
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            Login
          </Text>

          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={{
                backgroundColor: "#fff",
                color: "#000",
                fontSize: 20,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 4,
              }}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={handlePhoneChange}
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={{
                backgroundColor: "#fff",
                color: "#000",
                fontSize: 20,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 4,
              }}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={handlePasswordChange}
            />
          </View>

          <TouchableHighlight style={{ borderRadius: 4 }} onPress={handleLogin}>
            <View
              style={{
                width: "100%",
                padding: 8,
                backgroundColor: "#f39c12",
                borderRadius: 4,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
                Login
              </Text>
            </View>
          </TouchableHighlight>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 16,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#f39c12", fontWeight: "600", fontSize: 20 }}>
              Or
            </Text>
            <TouchableOpacity
              style={{ marginLeft: 4 }}
              onPress={handleRegisterPress}
            >
              <Text
                style={{
                  color: "white",
                  textDecorationLine: "underline",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Login;
