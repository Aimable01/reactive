import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

const placeHolderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const pickImageAsync = ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    quality: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeHolderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    gap: 10,
    alignItems: "center",
  },
});
