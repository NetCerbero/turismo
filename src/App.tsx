import React, { Key, Suspense } from "react";
import {
  ThemeProvider,
  createTheme,
  Button,
  IconButton,
  Box,
} from "@material-ui/core";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes,
  Outlet,
} from "react-router-dom";

import { primary, secondary, success, error } from "./styles/theme";
import Layout from "./components/Layout/Layout";
import GenerateRoute from "./config/RouteUtil";
import { ROUTE_PAGE } from "config/RoutePage";
//import AuthForm from "Page/Auth/Auth";
import { SnackbarProvider, useSnackbar } from "notistack";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import es from "date-fns/locale/es";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";

const theme = createTheme({
  palette: {
    primary: primary,
    secondary: secondary,
    success: success,
    error: error,
  },
});

interface CloseSnackbarProps {
  key: Key;
}
const CloseButton = () => {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton
      aria-label="Close notification"
      color="inherit"
      onClick={() => closeSnackbar()}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
};

export default function App(props: any) {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider locale={es} utils={DateFnsUtils}>
        <SnackbarProvider action={() => <CloseButton />}>
          <BrowserRouter>
            <Suspense
              fallback={
                <Box
                  width="100vw"
                  height="100vh"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CircularProgress />
                </Box>
              }
            >
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to={ROUTE_PAGE.AUTH.LOGIN} />}
                ></Route>
                <Route element={<Layout />}>{GenerateRoute()}</Route>
                <Route
                  path={ROUTE_PAGE.ERROR_PAGE[404]}
                  element={<div>not found</div>}
                />
                <Route
                  path="*"
                  element={<Navigate to={ROUTE_PAGE.ERROR_PAGE[404]} />}
                />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}
