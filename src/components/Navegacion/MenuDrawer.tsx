import React, { Fragment } from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { MenuConfig } from "config/RouteConfig";
import { Link } from "react-router-dom";
//import Logo from "assets/logo/logo.svg";
import { Box } from "@material-ui/core";
import { AuthManager } from "service/AuthManager";
const drawerWidth = 240;
const Logo = "/coldyearv2.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
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

export default function MenuDrawer(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const buildMenu = () => {
    const ruta = [];
    for (let index = 0; index < MenuConfig.length; index++) {
      let mn = MenuConfig[index];
      let subM = [];
      if (mn.subMenu && mn.subMenu?.length > 0) {
        subM = mn.subMenu.map((subItem: any, idx: any) => {
          if (subItem.link && subItem.component) {
            const check = subItem.access
              ? subItem.access.some(
                  (r: any) => r === AuthManager?.getUser()?.rol+''
                )
              : true;
            if (check) {
              return (
                <ListItem
                  button
                  component={Link}
                  key={subItem.nombre + idx}
                  to={subItem.link}
                >
                  {subItem.icon && <ListItemIcon>{subItem.icon}</ListItemIcon>}
                  <ListItemText primary={subItem.nombre} />
                </ListItem>
              );
            }
          }
          return null;
        });
      }

      if (mn.link && mn.component) {
        const check = mn.access
          ? mn.access.some((r: any) => r === AuthManager?.getUser()?.rol+'')
          : true;
        if (check) {
          ruta.push(
            <List key={mn.nombre + index+50}>
              <ListItem
                button
                component={Link}
                key={mn.nombre + index}
                to={mn.link}
              >
                {mn.icon && <ListItemIcon>{mn.icon}</ListItemIcon>}
                <ListItemText primary={mn.nombre} />
              </ListItem>
            </List>
          );
        }
      } else if (subM.length > 0) {
        ruta.push(<Divider></Divider>);
        ruta.push(<List key={mn.nombre + index+520}>{subM}</List>);
      }
    }
    return <Fragment>{ruta}</Fragment>;
  };
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.open,
        [classes.drawerClose]: !props.open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <Box
          position="relative"
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <img width={130} height={65} src={Logo} alt="logo coldyear"></img>
        </Box>
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>

      {buildMenu()}
    </Drawer>
  );
}
