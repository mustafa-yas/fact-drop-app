import { View, Text } from "react-native";
import React from "react";
import RecentFacts from "@/components/RecentFacts";

const RecentTab = () => {
  return (
    <View className="bg-zinc-900 h-full p-4">
      <Text className="text-4xl text-white mt-4 mb-6">Recent Facts</Text>
      <RecentFacts />
    </View>
  );
};

export default RecentTab;
