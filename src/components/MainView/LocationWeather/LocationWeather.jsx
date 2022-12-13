import { Container } from "@mui/material";
import { Forecast } from "./Forecast/Forecast";
import { CurrentLocation } from "./CurrentLocation/CurrentLocation";

export function LocationWeather() {
  return (
    <Container
      sx={{
        display: "flex",
        flex: 4,
        gap: 1,
        flexDirection: "column",
      }}
    >
      <CurrentLocation />
      <Forecast />
    </Container>
  );
}
