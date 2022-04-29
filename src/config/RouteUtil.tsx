import { MenuConfig } from "./RouteConfig";
import { Navigate } from "react-router-dom";
import { ROUTE_PAGE } from "./RoutePage";
import getPrivateRoute from "components/Route/PrivateRoute";

export default function GenerateRoute() {
  const getRuta = () => {
    const ruta = [];
    for (let index = 0; index < MenuConfig.length; index++) {
      const mn = MenuConfig[index];
      if (mn.link && mn.component) {
        ruta.push(
          getPrivateRoute({
            key: index + "r1",
            element: mn.component,
            path: mn.link,
          })
        );
      }
      if (mn.subMenu && mn.subMenu?.length > 0) {
        for (let idx = 0; idx < mn.subMenu.length; idx++) {
          const subItem = mn.subMenu[idx];
          if (subItem.link && subItem.component) {
            ruta.push(
              getPrivateRoute({
                key: index + "r4" + idx,
                element: subItem.component,
                path: subItem.link,
              })
            );
          }
        }
      }

      if (mn.pages && mn.pages?.length > 0) {
        for (let idx = 0; idx < mn.pages.length; idx++) {
          const subPage = mn.pages[idx];
          if (subPage.link && subPage.component) {
            ruta.push(
              getPrivateRoute({
                key: index + "r2" + idx,
                element: subPage.component,
                path: subPage.link,
              })
            );
          }
        }
      }
    }
    return ruta;
  };
  return getRuta();
}
