import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const WelcomeScreen = () => {
  return (
    <View className="bg-zinc-900 h-full justify-center items-center p-4">
      <Text className="text-4xl text-zinc-50 font-bold mb-4">Fact Drop</Text>
      <Ionicons
        name="logo-ionic"
        size={100}
        color="white"
        style={{ marginBottom: 20 }}
      />
      <Text className="text-lg text-zinc-50 mb-8 text-center">
        Discover amazing facts and expand your knowledge with Fact Drop!
      </Text>
      <TouchableOpacity
        className="bg-zinc-700 p-4 rounded-lg"
        onPress={() => router.push("/(tabs)/home")}
      >
        <Text className="text-2xl text-zinc-50">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
