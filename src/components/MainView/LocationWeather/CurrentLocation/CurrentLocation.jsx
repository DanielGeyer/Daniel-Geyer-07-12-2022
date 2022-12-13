import { IconButton, Typography, Box, CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { currentLocationSelector } from "../../../../features/Location/locationSlice";
import {
  favoriteCitiesSelector,
  toggleFavorite,
} from "../../../../features/favorites/favoritesSlice";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { getAccuWeatherIconURL } from "../../../../app/helpers";
import useMediaQuery from "@mui/material/useMediaQuery";

export function CurrentLocation() {
  const currentLocation = useSelector(currentLocationSelector);
  const favorites = useSelector(favoriteCitiesSelector);
  const dispatch = useDispatch();
  const isFavorite = favorites.cities.find(
    (city) => city.locationKey === currentLocation.locationKey
  );
  const isDesktop = useMediaQuery("(min-width:600px)");

  const onClickHandle = () => {
    dispatch(toggleFavorite(currentLocation));
  };

  if (currentLocation.error)
    return (
      <Typography textAlign="center">
        Cannot get location information
      </Typography>
    );
  else if (currentLocation.status === "loading")
    return (
      <Box sx={{ display: "flex", margin: "0 auto" }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 10,
        flex: 3,
        flexDirection: isDesktop ? "row" : "column",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" fontFamily={"Montserrat"} sx={{ padding: 0 }}>
          {currentLocation.name}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            padding: 0,
            fontFamily: "Montserrat",
          }}
        >
          {currentLocation.celsius}
          <Typography
            sx={{ fontSize: 12, display: "inline" }}
            fontSize={12}
            display="inline"
          >
            ℃
          </Typography>
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img
          width={80}
          src={getAccuWeatherIconURL(currentLocation.weatherIcon)}
          alt="weather icon"
        />
        <Typography sx={{ fontFamily: "Montserrat" }} variant="h6">
          {currentLocation.weatherText}
        </Typography>
        <IconButton
          sx={{ marginLeft: 5 }}
          onClick={onClickHandle}
          type="favorite"
        >
          {isFavorite ? (
            <Favorite color="primary" />
          ) : (
            <FavoriteBorder color="primary" />
          )}
        </IconButton>
      </Container>
    </Container>
  );
}
