import Fact from "@/types/fact";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FactState {
  currentFact: Fact | null;
  allFacts: Fact[];
  favoriteFacts: Fact[];
  loading: boolean;
}

const initialState: FactState = {
  currentFact: null,
  allFacts: [],
  favoriteFacts: [],
  loading: false,
};

const saveRecentFacts = async (facts: Fact[]) => {
  try {
    await AsyncStorage.setItem("recentFacts", JSON.stringify(facts));
  } catch (error) {
    console.log("Error saving facts", error);
  }
};

const saveFavorites = async (favorites: Fact[]) => {
  try {
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.log("Error saving favorites", error);
  }
};

const factSlice = createSlice({
  name: "facts",
  initialState,
  reducers: {
    setCurrentFact: (state, action: PayloadAction<Fact | null>) => {
      state.currentFact = action.payload;
    },
    setAllFacts: (state, action: PayloadAction<Fact[]>) => {
      state.allFacts = action.payload;
      saveRecentFacts(state.allFacts);
    },
    setFavoriteFacts: (state, action: PayloadAction<Fact[]>) => {
      state.favoriteFacts = action.payload;
      saveFavorites(state.favoriteFacts);
    },
    toggleFavoriteFact: (state, action: PayloadAction<Fact>) => {
      const fact = state.favoriteFacts.find((f) => f.id === action.payload.id);
      if (fact) {
        state.favoriteFacts = state.favoriteFacts.filter(
          (f) => f.id !== action.payload.id
        );
      } else {
        state.favoriteFacts = [...state.favoriteFacts, action.payload];
      }
      saveFavorites(state.favoriteFacts);
    },
    loadRecentFacts: (state, action: PayloadAction<Fact[]>) => {
      state.allFacts = action.payload;
    },
    loadFavorites: (state, action: PayloadAction<Fact[]>) => {
      state.favoriteFacts = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setCurrentFact,
  setAllFacts,
  toggleFavoriteFact,
  setFavoriteFacts,
  loadRecentFacts,
  loadFavorites,
  setLoading,
} = factSlice.actions;
export default factSlice.reducer;
