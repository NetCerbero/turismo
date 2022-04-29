import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { AuthManager } from "service/AuthManager";
import Box from "@material-ui/core/Box";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useNavigate } from 'react-router-dom';

import { ROUTE_PAGE } from "config/RoutePage";

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
  })
);

export default function AppBarMenu(props: any) {
  const classes = useStyles();
  const history = useNavigate();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: props.open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <div>
        <Typography variant="body1" noWrap display="block">
          {AuthManager.getUser()?.nombreCompleto ?? "Sin nombre"}
        </Typography>
        <Typography variant="caption" noWrap display="block">
          {`${AuthManager.getUser()?.sucursal?.nombre}`}
        </Typography>
        </div>
        <Box ml="auto">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() =>
              AuthManager.Logout(() => history(ROUTE_PAGE.AUTH.LOGIN))
            }
            edge="start"
          >
            <ExitToAppIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
