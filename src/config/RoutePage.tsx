export const ROUTE_PAGE = {
  INICIO: "/",
  HOME: {
    VER: "/home",
  },
  ERROR_PAGE: {
    "404": "/404",
  },
  AUTH: {
    LOGIN: "/login",
  },
  USUARIO:{
    VER:"/usuario",
    CREAR:"/usuario/crear",
    MM:"/usuarioa/asdasd/asdasd"
  },
  SERVICIO:{
    VER:"/servicio"
  },
  TRANSPORTE:{
    VER:"/transporte",
    EDITAR:"/transporte/:id"
  }
};

export function PARAM(route: string, param: any | object) {
  //Si el object esta vacio
  let isEmpty = (data: any) => {
    return Object.keys(data).length === 0;
  };
  //Si es un object
  let isObject = (data: any) => {
    return typeof data === "object" && data !== null && data !== undefined;
  };
  let copyUrl = route;
  if (isObject(param) && !isEmpty(param)) {
    Object.keys(param).forEach((key) => {
      copyUrl = copyUrl.replace(":" + key, param[key] as string);
    });
  }
  return copyUrl;
}
