import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import {
  toggleMainView,
  mainViewSelector,
} from "../../features/viewToggle/viewToggleSlice";

export function Header() {
  const isMainView = useSelector(mainViewSelector);
  const dispatch = useDispatch();

  if (isMainView.error) {
    return <Typography></Typography>
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Weather App
        </Typography>

        <ButtonGroup variant="contained">
          <Button
            onClick={() => dispatch(toggleMainView(true))}
            color={isMainView ? "secondary" : "primary"}
          >
            Main
          </Button>
          <Button
            onClick={() => dispatch(toggleMainView(false))}
            color={isMainView ? "primary" : "secondary"}
          >
            Favorites
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
