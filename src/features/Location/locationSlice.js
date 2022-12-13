import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACCUWEATHER_API_KEY } from "../../app/constants";
import axios from "axios";

function resolveCurrentPosition(options) {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
}

const dateToDay = (date) => {
  switch (new Date(date).getDay()) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return;
  }
};

export const setCurrentLocation = createAsyncThunk(
  "location/setCurrentLocation",
  async (data, { dispatch }) => {
    const newCondition = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${data.locationKey}?` +
        new URLSearchParams({
          apikey: ACCUWEATHER_API_KEY,
          details: true,
        })
    );

    dispatch(fetchForecast(data.locationKey));

    return {
      name: data.name,
      celsius: newCondition.data[0].Temperature.Metric.Value,
      fahrenheit: newCondition.data[0].Temperature.Imperial.Value,
      weatherIcon: newCondition.data[0].WeatherIcon,
      weatherText: newCondition.data[0].WeatherText,
    };
  }
);

async function getInitialLocation() {
  try {
    const currentLocation = await resolveCurrentPosition();
    const cityGeoLocation = await axios.get(
      "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?" +
        new URLSearchParams({
          apikey: ACCUWEATHER_API_KEY,
          q: `${currentLocation.coords.latitude},${currentLocation.coords.longitude}`,
          details: true,
        })
    );

    return {
      locationKey: cityGeoLocation.data.Key,
      name: cityGeoLocation.data.EnglishName,
    };
  } catch (err) {
    return {
      name: "Tel-Aviv",
      locationKey: "215854",
    };
  }
}

export const getCurrentLocationInfo = createAsyncThunk(
  "location/getCurrentLocation",
  async (_, { dispatch }) => {
    const currentLocation = await getInitialLocation();

    dispatch(fetchForecast(currentLocation.locationKey));

    const currentCondition = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${currentLocation.locationKey}?` +
        new URLSearchParams({
          apikey: ACCUWEATHER_API_KEY,
          details: true,
        })
    );

    return {
      name: currentLocation.name,
      locationKey: currentLocation.locationKey,
      celsius: currentCondition.data[0].Temperature.Metric.Value,
      fahrenheit: currentCondition.data[0].Temperature.Imperial.Value,
      weatherIcon: currentCondition.data[0].WeatherIcon,
      weatherText: currentCondition.data[0].WeatherText,
    };
  }
);

export const fetchForecast = createAsyncThunk(
  "location/fetchForecast",
  async (locationKey) => {
    const response = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?` +
        new URLSearchParams({
          apikey: ACCUWEATHER_API_KEY,
          details: true,
          metric: true,
        })
    );
    const forecast = response.data.DailyForecasts.map((day) => {
      return {
        name: dateToDay(day.Date),
        icon: day.Day.Icon,
        min: day.Temperature.Minimum.Value,
        max: day.Temperature.Maximum.Value,
      };
    });
    return forecast;
  }
);

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    currentLocation: {
      status: "idle",
      error: null,
      name: "Tel-Aviv",
      locationKey: "215854",
      celsius: null,
      fahrenheit: null,
      weatherIcon: null,
      weatherText: null,
      forecast: {
        status: "idle",
        error: null,
        days: [],
      },
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    // getCurrentLocationInfo
    builder.addCase(getCurrentLocationInfo.pending, (state, action) => {
      state.currentLocation.status = "loading";
    });
    builder.addCase(getCurrentLocationInfo.fulfilled, (state, action) => {
      state.currentLocation = { ...state.currentLocation, ...action.payload };
    });
    builder.addCase(getCurrentLocationInfo.rejected, (state, action) => {
      state.currentLocation.status = "error";
      state.currentLocation.error = action.error;
    });

    // fetchForecast
    builder.addCase(fetchForecast.pending, (state, action) => {
      state.currentLocation.forecast.status = "loading";
    });
    builder.addCase(fetchForecast.fulfilled, (state, action) => {
      state.currentLocation.forecast.days = action.payload;
    });
    builder.addCase(fetchForecast.rejected, (state, action) => {
      state.currentLocation.forecast.status = "error";
      state.currentLocation.forecast.error = action.error;
    });

    // setCurrentLocation
    builder.addCase(setCurrentLocation.pending, (state, action) => {
      state.currentLocation.status = "loading";
    });
    builder.addCase(setCurrentLocation.fulfilled, (state, action) => {
      state.currentLocation = { ...state.currentLocation, ...action.payload };
    });
    builder.addCase(setCurrentLocation.rejected, (state, action) => {
      state.currentLocation.status = "error";
      state.currentLocation.error = action.error;
    });
  },
});
export const currentLocationSelector = (state) =>
  state.location.currentLocation;

export default locationSlice.reducer;
