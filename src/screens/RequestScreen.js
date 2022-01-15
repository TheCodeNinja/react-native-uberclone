import React from "react";
import { 
  Text, 
  View, 
  StyleSheet 
} from "react-native";

const RequestScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Request Screen</Text>
    </View>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
