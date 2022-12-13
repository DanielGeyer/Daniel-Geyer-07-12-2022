import { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  favoriteCitiesSelector,
  getCurrentConditions,
} from "../../../features/favorites/favoritesSlice";
import { setCurrentLocation } from "../../../features/Location/locationSlice";
import { toggleMainView } from "../../../features/viewToggle/viewToggleSlice";

export function FavoriteCities() {
  const dispatch = useDispatch();
  const favorites = useSelector(favoriteCitiesSelector);

  useEffect(() => {
    for (const city of favorites.cities) {
      dispatch(getCurrentConditions(city));
    }
  }, [dispatch, favorites.cities]);

  const handleOnClick = (city) => {
    dispatch(toggleMainView(true));
    dispatch(setCurrentLocation(city));
  };

  if (favorites.error) {
    return (
      <Typography>Cannot get conditions of the favorite cities</Typography>
    );
  }

  return (
    <Grid container sx={{ justifyContent: "space-evenly", padding: 8 }}>
      {!favorites.cities.length && "No Favorite Cities To Display"}
      {favorites.cities.map((favoriteCity) => (
        <Card key={favoriteCity.locationKey} sx={{ minWidth: 150 }}>
          <CardActionArea onClick={() => handleOnClick(favoriteCity)}>
            <CardContent>
              <h3>{favoriteCity.name}</h3>
              <h3>{favoriteCity.celsius}</h3>
              <h3>{favoriteCity.weatherText}</h3>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Grid>
  );
}
