import { configureStore } from "@reduxjs/toolkit";
import toggleViewReducer from "../features/viewToggle/viewToggleSlice";
import locationReducer from "../features/Location/locationSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
export default configureStore({
  reducer: {
    mainViewMode: toggleViewReducer,
    location: locationReducer,
    favorites: favoritesReducer,
  },
});
