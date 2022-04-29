const url = process.env.REACT_APP_URL;

function host(uri:any){
  return url+"/api/"+uri;
}
/**
 * VERBO_ACCION (en ingles)
 * ejemplos:
 * DELETE_XXXX:"",
 * UPDATE_XXXX:"",
 * CREATE_XXXX:"",
 * READ_XXXX:"",
 */
export const API = {
  //PUBLIC
  PUBLIC_PRODUCTO:{
    GET:host("v1/public/producto"),
    GET_ONE:host("v1/public/producto/:id"),
    CREATE:host("v1/producto"),
    DELETE:host("v1/producto/:id"),
    UPDATE:host("v1/producto/:id"),
  },

  AUTH: {
    REFRESH:host("v1/auth/refresh"),
    CLOSE_SESSIONS: host("v1/auth/close"),
    LOGIN: host("v1/auth/login"),
    LOGOUT:host("v1/auth/logout"),
  },

  //AUTH NEEDS
  SUCURSAL:{
    GET:host("v1/sucursal"),
    GET_ONE:host("v1/sucursal/:id"),
    CREATE:host("v1/sucursal"),
    DELETE:host("v1/sucursal/:id"),
    UPDATE:host("v1/sucursal/:id"),
  },
  CATEGORIA:{
    GET:host("v1/categoria"),
    GET_ONE:host("v1/categoria/:id"),
    CREATE:host("v1/categoria"),
    DELETE:host("v1/categoria/:id"),
    UPDATE:host("v1/categoria/:id"),
  },
  MEDIDA:{
    GET:host("v1/medida"),
    GET_ONE:host("v1/medida/:id"),
    CREATE:host("v1/medida"),
    DELETE:host("v1/medida/:id"),
    UPDATE:host("v1/medida/:id"),
  },
  BODEGA:{
    GET:host("v1/bodega"),
    GET_ONE:host("v1/bodega/:id"),
    CREATE:host("v1/bodega"),
    DELETE:host("v1/bodega/:id"),
    UPDATE:host("v1/bodega/:id"),
  },
  AREA_SERVICIO:{
    GET:host("v1/area/servicio"),
    GET_ONE:host("v1/area/servicio/:id"),
    CREATE:host("v1/area/servicio"),
    DELETE:host("v1/area/servicio/:id"),
    UPDATE:host("v1/area/servicio/:id"),
  },
  INSUMO:{
    GET:host("v1/insumo"),
    GET_ONE:host("v1/insumo/:id"),
    CREATE:host("v1/insumo"),
    DELETE:host("v1/insumo/:id"),
    UPDATE:host("v1/insumo/:id"),
  },
  PROVEEDOR:{
    GET:host("v1/proveedor"),
    GET_ONE:host("v1/proveedor/:id"),
    CREATE:host("v1/proveedor"),
    DELETE:host("v1/proveedor/:id"),
    UPDATE:host("v1/proveedor/:id"),
  },
  PRODUCTO:{
    GET:host("v1/producto"),
    GET_BY_CATEGORIA:host("v1/producto/categoria/:id"),
    GET_ONE:host("v1/producto/:id"),
    CREATE:host("v1/producto"),
    DELETE:host("v1/producto/:id"),
    UPDATE:host("v1/producto/:id"),
  },
  FILE:{
    GET:host("v1/asset/:uri")
  },
  MODIFICADOR:{
    GET:host("v1/modificador/listar/:producto"),
    GET_ONE:host("v1/modificador/:id"),
    CREATE:host("v1/modificador"),
    DELETE:host("v1/modificador/:id"),
    UPDATE:host("v1/modificador/:id"),
  },
  MOVIMIENTO:{
    GET:host("v1/movimiento"),
    GET_ONE:host("v1/movimiento/:id"),
    CREATE:host("v1/movimiento"),
    CREATE_PUBLIC:host("v1/movimiento/public"),
    DELETE:host("v1/movimiento/:id"),
    UPDATE:host("v1/movimiento/:id"),
    COMPLETE:host("v1/movimiento/complete/:id"),
  },
};
