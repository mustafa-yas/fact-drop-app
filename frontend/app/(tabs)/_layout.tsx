import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabLayout = () => {
  const tabBarOptions = (
    icon: keyof typeof Ionicons.glyphMap,
    label: string
  ) => {
    const options = {
      tabBarLabel: label,
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Ionicons
          name={icon}
          size={24}
          color={focused ? "#d4d4d8" : "#52525b"}
        />
      ),
    };
    return options;
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#09090b", borderTopWidth: 0 },
        tabBarActiveTintColor: "#d4d4d8",
        tabBarInactiveTintColor: "#52525b",
      }}
    >
      <Tabs.Screen name="home" options={tabBarOptions("home", "Home")} />
      <Tabs.Screen
        name="favorites"
        options={tabBarOptions("heart", "Favorites")}
      />
      <Tabs.Screen
        name="recent"
        options={tabBarOptions("time-outline", "Recent")}
      />
    </Tabs>
  );
};

export default TabLayout;
