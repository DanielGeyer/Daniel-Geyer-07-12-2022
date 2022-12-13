import { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { MainView } from "./components/MainView/MainView";
import { FavoritesView } from "./components/FavoritesView/FavoritesView";
import { mainViewSelector } from "../src/features/viewToggle/viewToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getCurrentLocationInfo } from "./features/Location/locationSlice";

function App() {
  const isMain = useSelector(mainViewSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentLocationInfo());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {isMain ? <MainView /> : <FavoritesView />}
    </div>
  );
}

export default App;
