import { View, Text, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface CategoriesProps {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  showCategories: boolean;
  setShowCategories: Dispatch<SetStateAction<boolean>>;
}

const Categories: React.FC<CategoriesProps> = ({
  category,
  setCategory,
  setShowCategories,
  showCategories,
}) => {
  const categories = [
    "science",
    "technology",
    "math",
    "food",
    "history",
    "space",
    "nature",
    "animals",
    "random",
  ];
  return (
    <View className="border-t border-zinc-700 p-4 mb-14">
      <Text className="text-white text-lg">Categories</Text>
      <View className="flex flex-row w-full flex-wrap gap-4 mt-4">
        {(showCategories ? categories.slice(0, 3) : categories).map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setCategory(cat === category ? "" : cat)}
            className={`px-4 py-2 rounded-lg ${
              category === cat ? "bg-amber-600" : "bg-zinc-700"
            }`}
          >
            <Text className="text-white">{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="justify-center items-center mt-4">
        <TouchableOpacity onPress={() => setShowCategories(!showCategories)}>
          <MaterialIcons
            name={showCategories ? "keyboard-arrow-down" : "keyboard-arrow-up"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Categories;
