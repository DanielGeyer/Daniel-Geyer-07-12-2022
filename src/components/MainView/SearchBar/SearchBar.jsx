import TextField from "@mui/material/TextField";
import throttle from "lodash/throttle";
import React, { useEffect } from "react";
import { Autocomplete } from "@mui/material";
import { useState } from "react";
import style from "../SearchBar/SearchBar.module.css";
import axios from "axios";
import { ACCUWEATHER_API_KEY } from "../../../../src/app/constants";
import { useDispatch } from "react-redux";
import { setCurrentLocation } from "../../../features/Location/locationSlice";

function getAutocompleteResults() {
  return throttle((request, callback) => {
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?` +
          new URLSearchParams({
            apikey: ACCUWEATHER_API_KEY,
            q: request,
          })
      )
      .then(callback);
  }, 200);
}

export function SearchBar() {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputValue) {
      const fetchResults = getAutocompleteResults();
      fetchResults(inputValue, (newOptions) => {
        setOptions(
          newOptions.data.map((option) => ({
            label: option.LocalizedName,
            locationKey: option.Key,
          }))
        );
      });
    }
  }, [inputValue]);

  return (
    <div className={style.searchContainer}>
      <Autocomplete
        id="autocompleteSearch"
        sx={{ width: "50%" }}
        inputValue={inputValue}
        options={options}
        onChange={(_, newValue) => {
          dispatch(
            setCurrentLocation({
              name: newValue.label,
              locationKey: newValue.locationKey,
            })
          );
          setValue(newValue);
        }}
        value={value}
        filterOptions={(options) => options}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for city"
            inputProps={params.inputProps}
          />
        )}
      />
    </div>
  );
}
