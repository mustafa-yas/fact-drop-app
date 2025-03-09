import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
} from "react-native";
import React, { useRef, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Fact from "@/types/fact";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  setAllFacts,
  setCurrentFact,
  toggleFavoriteFact,
} from "@/redux/slices/factSlice";

interface GetFactProps {
  fetchFact: () => void;
}

const GetFact: React.FC<GetFactProps> = ({ fetchFact }) => {
  const { currentFact, allFacts, loading, favoriteFacts } = useSelector(
    (state: RootState) => state.facts
  );
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [currentFact]);

  return (
    <View className="w-full items-center p-4 mb-4">
      <Animated.View
        style={{ opacity: fadeAnim }}
        className="bg-zinc-800 p-6 justify-center rounded-lg mb-6 w-full shadow-lg"
      >
        <Text className="text-white text-center text-3xl mb-4">
          Did You Know?
        </Text>
        {currentFact && (
          <View className="w-full justify-between flex-row items-center gap-3">
            <TouchableOpacity
              onPress={() => dispatch(toggleFavoriteFact(currentFact))}
              className="p-2"
            >
              <Ionicons
                name={
                  favoriteFacts.includes(currentFact)
                    ? "heart"
                    : "heart-outline"
                }
                size={28}
                color={favoriteFacts.includes(currentFact) ? "red" : "white"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(setCurrentFact(null))}
              className="p-2"
            >
              <Ionicons name={"close"} size={28} color={"white"} />
            </TouchableOpacity>
          </View>
        )}
        <Text className="text-white text-center text-xl my-4">
          {loading ? (
            <ActivityIndicator size="large" color="#ffffff" />
          ) : (
            currentFact?.text || "Tap the button below to reveal a fact!"
          )}
        </Text>
      </Animated.View>
      <TouchableOpacity
        className="bg-zinc-50 p-4 rounded-lg shadow-md w-full"
        onPress={fetchFact}
      >
        <Text className="text-2xl text-center text-zinc-900">Get a Fact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetFact;
