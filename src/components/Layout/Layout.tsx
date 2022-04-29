import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarMenu from "../Navegacion/AppBarMenu";
import MenuDrawer from "../Navegacion/MenuDrawer";
import { Outlet } from "react-router";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
  })
);

export default function Layout(props: any) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarMenu open={open} handleDrawerOpen={handleDrawerOpen}></AppBarMenu>
      <MenuDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
      ></MenuDrawer>
      <Outlet />
    </div>
  );
}
