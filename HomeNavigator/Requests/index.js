import { useCallback, useEffect } from "react";
import { Text, View } from "react-native";
import ApiService from "../../helpers/ApiService";
import { useNavigation } from "@react-navigation/native";

const Requests = () => {
  const navigation = useNavigation();
  const getJoinRequests = useCallback(async () => {
    const response = await ApiService.get("/api/family/join-requests");

    if (response.isSuccess) {
      console.log(response.data);
    } else {
      navigation.goBack();
    }
  }, []);

  useEffect(() => {
    getJoinRequests();
  }, []);

  return (
    <View>
      <Text>Requests</Text>
    </View>
  );
};

export default Requests;
