import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useSelector } from "react-redux";
import { currentLocationSelector } from "../../../../features/Location/locationSlice";
import { getAccuWeatherIconURL } from "../../../../app/helpers";
import useMediaQuery from "@mui/material/useMediaQuery";

export function Forecast() {
  const currentLocation = useSelector(currentLocationSelector);
  const isDesktop = useMediaQuery("(min-width:600px)");

  if (currentLocation.forecast.error) {
    return (
      <Typography textAlign="center">Couldn't get location forecast</Typography>
    );
  } else if (currentLocation.forecast.status === "loading")
    return (
      <Box sx={{ display: "flex", margin: "0 auto" }}>
        <CircularProgress />
      </Box>
    );
  return (
    <Grid
      container
      justifyContent={isDesktop ? "space-between" : "center"}
      gap={2}
      alignSelf={"end"}
    >
      {currentLocation.forecast.days.map((day) => (
        <Card
          key={day.name}
          sx={{
            height: 180,
            width: 180,
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <h3 sx={{ color: "text-secondary" }}>{day.name}</h3>
            <img src={getAccuWeatherIconURL(day.icon)} alt="Condition" />
            <h3>
              {day.min} | {day.max}
            </h3>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}
