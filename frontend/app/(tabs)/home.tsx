import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import GetFact from "@/components/GetFact";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  setLoading,
  setAllFacts,
  setCurrentFact,
} from "@/redux/slices/factSlice";
import { Ionicons } from "@expo/vector-icons";

import Fact from "@/types/fact";
import Categories from "@/components/categories";

const HomeTab = () => {
  const [category, setCategory] = useState<string>("");
  const [showCategories, setShowCategories] = useState<boolean>(false);
  
  const { allFacts, currentFact } = useSelector(
    (state: RootState) => state.facts
  );
  const dispatch = useDispatch();

  const fetchFact = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(
        "http://192.168.29.39:8000/api/generate-fact/",
        { category }
      );
      const newFact: Fact = {
        id: Math.random(),
        text: response.data.fact,
      };
      dispatch(setCurrentFact(newFact));
      dispatch(setAllFacts([newFact, ...allFacts]));
      console.log(currentFact);
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
  };

  return (
    <ScrollView className="bg-zinc-900 h-full p-6 pt-14">
      <View className="items-center mb-4">
        <Ionicons
          name="logo-ionic"
          size={100}
          color="white"
          style={{ marginBottom: 20 }}
        />
        <Text className="text-5xl text-white mb-4">Fact Drop</Text>
      </View>
      <GetFact fetchFact={fetchFact} />
      <Categories
        setCategory={setCategory}
        category={category}
        showCategories={showCategories}
        setShowCategories={setShowCategories}
      />
    </ScrollView>
  );
};

export default HomeTab;
