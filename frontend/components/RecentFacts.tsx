import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setAllFacts } from "@/redux/slices/factSlice";

const RecentFacts = () => {
  const { allFacts } = useSelector((state: RootState) => state.facts);
  const dispatch = useDispatch();

  return (
    <View className="w-full flex-1">
      {allFacts.length > 0 && (
        <TouchableOpacity
          onPress={() => dispatch(setAllFacts([]))}
          className=""
        >
          <Text className="text-zinc-400 mb-2">Clear all</Text>
        </TouchableOpacity>
      )}
      {allFacts.length > 0 ? (
        <FlatList
          data={allFacts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="bg-zinc-800 p-4 rounded-lg mb-2 w-full">
              <Text className="text-white text-lg">{item.text}</Text>
            </View>
          )}
          className="w-full"
        />
      ) : (
        <View className="mb-2 w-full flex-1 justify-center items-center">
          <Text className="text-zinc-500 text-xl text-center">
            No recent facts yet!
          </Text>
        </View>
      )}
    </View>
  );
};

export default RecentFacts;
