import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Ionicons } from "@expo/vector-icons";
import { setFavoriteFacts, toggleFavoriteFact } from "@/redux/slices/factSlice";

const FavoriteTab = () => {
  const favoriteFacts =
    useSelector((state: RootState) => state.facts.favoriteFacts) || [];
  const dispatch = useDispatch();

  return (
    <ScrollView className="p-4 bg-zinc-900 h-full">
      <Text className="text-4xl text-white mt-4 mb-6">Favorite Facts</Text>
      {favoriteFacts.length > 0 && (
        <TouchableOpacity
          onPress={() => dispatch(setFavoriteFacts([]))}
          className=""
        >
          <Text className="text-zinc-400 mb-2">Clear all</Text>
        </TouchableOpacity>
      )}
      {favoriteFacts.length > 0 ? (
        <View className="flex flex-wrap flex-row gap-4 justify-center mb-8">
          {favoriteFacts.map((item) => (
            <View
              key={item.id}
              className="bg-zinc-800 p-4 rounded-lg shadow-md"
              style={{
                flexBasis: "48%",
                flexGrow: 1,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  dispatch(
                    setFavoriteFacts(
                      favoriteFacts.filter((f) => f.id !== item.id)
                    )
                  )
                }
                className="self-end -mt-2 -mr-2"
              >
                <Ionicons name={"close"} size={24} color={"white"} />
              </TouchableOpacity>
              <Text className="text-white text-lg">{item.text}</Text>
            </View>
          ))}
        </View>
      ) : (
        <View className="justify-center items-center ">
          <Text className="text-zinc-500 text-xl">No favorite facts yet!</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default FavoriteTab;
