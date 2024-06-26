import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Quicksand_600SemiBold } from "@expo-google-fonts/quicksand";
import { useFonts } from "expo-font";

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({ Quicksand_600SemiBold });
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleCPasswordChange = (e) => {
    setCPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleLoginPress = () => {
    navigation.navigate("Login");
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
            }}
          >
            Register
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
              placeholder="Full Name"
              value={userName}
              onChange={handleNameChange}
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
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneChange}
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
              onChange={handlePasswordChange}
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
              placeholder="Confirm Password"
              secureTextEntry
              value={cPassword}
              onChange={handleCPasswordChange}
            />
          </View>

          <TouchableHighlight style={{ borderRadius: 4 }} onPress={() => {}}>
            <View
              style={{
                width: "100%",
                padding: 8,
                backgroundColor: "#f39c12",
                borderRadius: 4,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Register
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
              onPress={handleLoginPress}
            >
              <Text
                style={{
                  color: "white",
                  textDecorationLine: "underline",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Register;
