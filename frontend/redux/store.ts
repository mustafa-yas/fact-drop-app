import { configureStore, Dispatch } from "@reduxjs/toolkit";
import factReducer, {
  loadFavorites,
  loadRecentFacts,
} from "./slices/factSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const store = configureStore({
  reducer: {
    facts: factReducer,
  },
});

const loadStoredFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem("favorites");
    if (favorites) {
      store.dispatch(loadFavorites(JSON.parse(favorites)));
    }
  } catch (error) {
    console.log("Error loading favorites", error);
  }
};
const loadStoredRecentFacts = async () => {
  try {
    const recentFacts = await AsyncStorage.getItem("recentFacts");
    if (recentFacts) {
      store.dispatch(loadRecentFacts(JSON.parse(recentFacts)));
    }
  } catch (error) {
    console.log("Error loading recent facts", error);
  }
};

loadStoredFavorites();
loadStoredRecentFacts();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
