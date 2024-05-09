import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Register from "./Register";
import { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const navigation = useNavigation();

  const handleAuth = useCallback(async () => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      navigation.replace("Home");
    }
  }, []);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ header: () => null }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
