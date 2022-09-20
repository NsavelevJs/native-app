import { StatusBar } from "expo-status-bar";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
const image = {uri: "https://i.gifer.com/embedded/download/76YS.gif"}
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <View>
        <Text style={styles.mono}>The Endless Void of Space</Text>
      </View>
      <Button style={styles.button} title="Do Nothing Button!" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    padding:5,
  },
  mono: {
    fontFamily:"monospace",
    margin:16,
    fontSize: 20,
    color: "green",
    backgroundColor: "#000000c0",
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
