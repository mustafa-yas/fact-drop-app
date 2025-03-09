import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import "../global.css";
import { store } from "@/redux/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
