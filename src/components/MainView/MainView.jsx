import { SearchBar } from "./SearchBar/SearchBar";
import style from "../MainView/MainView.module.css";
import { LocationWeather } from "./LocationWeather/LocationWeather";
export function MainView() {
  return (
    <div className={style.mainScreen}>
      <SearchBar />
      <LocationWeather />
    </div>
  );
}
