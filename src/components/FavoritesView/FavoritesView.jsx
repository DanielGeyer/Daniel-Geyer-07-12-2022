import { FavoriteCities } from "./FavoriteCities/FavoriteCities";
import style from "../FavoritesView/FavoritesView.module.css";

export function FavoritesView() {
  return (
    <div className={style.container}>
      <h1>Favorite Cities</h1>
      <FavoriteCities />
    </div>
  );
}
