import React from "react";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { ROUTE_PAGE } from "./RoutePage";
import { ROLES } from "constants/index";
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import StoreIcon from '@material-ui/icons/Store';
import CategoryIcon from '@material-ui/icons/Category';

export const MenuConfig: any[] = [
  {
    nombre: "DashBoard",
    icon: <AssessmentIcon />,
    subMenu: [
      {
        nombre: "Usuario",
        link: ROUTE_PAGE.USUARIO.VER,
        component: React.lazy(
          () => import("page/usuario/Usuario")
        ),
        icon: <EmojiTransportationIcon />,
        //access: [/* ROLES.ADMINISTRADOR, ROLES.PERSONAL */],
      },
      {
        nombre: "Servicio",
        link: ROUTE_PAGE.SERVICIO.VER,
        component: React.lazy(
          () => import("page/servicio/Servicio")
        ),
        icon: <EmojiTransportationIcon />,
        //access: [/* ROLES.ADMINISTRADOR, ROLES.PERSONAL */],
      },
     /*  {
        nombre: "Sucursal",
        link: ROUTE_PAGE.SUCURSAL.LISTAR,
        component: React.lazy(
          () => import("Page/sucursal/Sucursal")
        ),
        icon: <EmojiTransportationIcon />,
        access: [ROLES.ADMINISTRADOR, ROLES.PERSONAL],
      }, */
    ],
    /*access: [ ROLES.ADMINISTRADOR ],*/
    pages: [
      /* {
        link: ROUTE_PAGE.SUCURSAL.CREAR,
        component: React.lazy(() => import("Page/sucursal/SucursalCrear")),
      },
      {
        link: ROUTE_PAGE.SUCURSAL.EDITAR,
        component: React.lazy(() => import("Page/sucursal/SucursalEditar")),
      }, */
    ],
  },
 
];
