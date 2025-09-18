import MyProgressBar from "@/components/MyProgressBar";
import { StyleSheet, View } from "react-native";

export default function Index() {
  
  return (
    <View>
      <MyProgressBar/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
          flex : 1,
          padding: 16,
          backgroundColor: "lavender",
          justifyContent: "center",
          alignItems: "center",
      },
})
