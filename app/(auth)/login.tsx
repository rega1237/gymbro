import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "react-native";
import { Link } from "expo-router";

export default function LoginScreen() {
  return (
    <ThemedView className="flex-1 items-center justify-center">
      <Image
        source={require("../../assets/images/gymbro.png")}
        style={{ width: 300, height: 100, resizeMode: "contain" }}
      />
      <Link href="/(tabs)/explore" asChild>
        <Pressable className="bg-[#f0c30f] mt-5 p-3 rounded-md active:opacity-20">
          <ThemedText type="defaultSemiBold">Sign In With Google</ThemedText>
        </Pressable>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
