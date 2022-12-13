import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCUWEATHER_API_KEY } from "../../app/constants";

export const getCurrentConditions = createAsyncThunk(
  "location/getCurrentConditions",
  async (data) => {
    const currentCondition = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${data.locationKey}?` +
        new URLSearchParams({
          apikey: ACCUWEATHER_API_KEY,
          details: true,
        })
    );

    return {
      name: data.name,
      locationKey: data.locationKey,
      celsius: currentCondition.data[0].Temperature.Metric.Value,
      fahrenheit: currentCondition.data[0].Temperature.Imperial.Value,
      weatherIcon: currentCondition.data[0].WeatherIcon,
      weatherText: currentCondition.data[0].WeatherText,
    };
  }
);
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    status: "idle",
    error: null,
    cities: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const favoriteIndex = state.cities.findIndex(
        (item) => item.locationKey === action.payload.locationKey
      );

      if (favoriteIndex !== -1) {
        state.cities.splice(favoriteIndex, 1);
      } else {
        state.cities.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentConditions.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getCurrentConditions.fulfilled, (state, action) => {
      const match = state.cities.find(
        (city) => city.locationKey === action.payload.locationKey
      );
      if (match) {
        match.weatherIcon = action.payload.weatherIcon;
        match.weatherText = action.payload.weatherText;
        match.celsius = action.payload.celsius;
        match.fahrenheit = action.payload.fahrenheit;
        match.name = action.payload.name;
      }
    });
    builder.addCase(getCurrentConditions.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const favoriteCitiesSelector = (state) => state.favorites;

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
