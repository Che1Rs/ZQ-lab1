import * as React from "react";
import { View, Text, Image } from "react-native";

function App() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Image
        source={require("./assets/books.png")}
        resizeMode="contain"
        style={{
          width: 80,
          height: 80,
          marginBottom: 30
        }}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',

        }}
      >
        Book Management
      </Text>
    </View>
  );
}

export default App;
