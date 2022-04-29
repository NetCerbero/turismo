import Axios from "axios";
import { configuracionRequest, WrapHandleError } from "./utils";
import { AuthManager } from "service/AuthManager";
import { API } from "service/Api";
import { ROUTE_PAGE } from "config/RoutePage";
import PrintConfig from "config/PrintConfig";
export const HTTP_CODE: any = {
  OFF_SERVER: 503,
  OKEY: 200,
};
export const OFF_SERVER = "No se encuentra disponible el servidor";
export const OFF_SERVER_ERROR =
  "El servidor se encuentra en mantenimiento o está caido";

function isNetworkError(err: any) {
  return !!err.isAxiosError && !err?.response;
}
export interface ErrorServer {
  statusCode: number;
  error: string;
  message: string | object;
}
function HandleError(
  statusCode: any,
  message: any,
  error = OFF_SERVER_ERROR
): ErrorServer {
  return { statusCode: statusCode, message: message, error: error };
}
let isRefreshing = false;
let failedQueue: any[] = [];
const processQueue = (error: any) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });
  failedQueue = [];
};

Axios.interceptors.request.use(
  (config: any) => {
    const accessToken = AuthManager.getToken();
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const logOutForce = (status: any) => {
  if ([401, 403].includes(status)) {
    //borrar los token
    const host = PrintConfig.getHost();
    localStorage.clear();
    PrintConfig.setHost(host);
    return window.location.replace(ROUTE_PAGE.AUTH.LOGIN);
  }
};

Axios.interceptors.response.use(
  (response) => response,
  (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return Axios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;
      return new Promise(function (resolve, reject) {
        let refreshToken = AuthManager.getRefreshToken();
        Axios.create()
          .post(API.AUTH.REFRESH, { refreshToken: refreshToken })
          .then((rsp) => {
            AuthManager.saveToken(rsp.data.data.accessToken);
            processQueue(null);
            resolve(Axios(originalRequest));
          })
          .catch((error) => {
            logOutForce(error.response.status);
            processQueue(error);
            reject(err);
          })
          .then(() => {
            isRefreshing = false;
          });
      });
    }
    //logOutForce(err.response.status);
    return Promise.reject(err);
  }
);

const verifyError = (error: any) => {
  if (!isNetworkError(error)) {
    throw WrapHandleError(
      HandleError(
        error?.response?.status,
        error?.response?.data?.message,
        error?.response?.data?.error
      ),
      "error"
    );
  }
  throw WrapHandleError(
    HandleError(HTTP_CODE.OFF_SERVER, OFF_SERVER),
    "warning"
  );
};

export class ServerRequest {
  static async ALL(requests: any[]) {
    try {
      return await Axios.all(requests);
    } catch (error:any) {
      throw new { ...error }();
    }
  }
  static async POST(
    url: string,
    {
      data = {},
      config = configuracionRequest.config,
      parse = configuracionRequest.parse,
    } = {}
  ) {
    try {
      if (!parse) return await Axios.create().post(url, data, config);
      return await Axios.post(url, data, config);
    } catch (error:any) {
      verifyError(error);
    }
  }

  static async GET(
    url: string,
    {
      query = configuracionRequest.query,
      parse = configuracionRequest.parse,
      config = configuracionRequest.config,
    } = {}
  ) {
    if (Object.keys(query).length !== 0) {
      const queryParams = `?${new URLSearchParams(query).toString()}`;
      url = url.concat(queryParams);
    }
    try {
      if (!parse) return await Axios.create().get(url, config);
      return await Axios.get(url, config);
    } catch (error:any) {
      verifyError(error);
    }
  }

  static async PUT(
    url: string,
    data: object,
    config = configuracionRequest.config
  ) {
    try {
      return await Axios.put(url, data, config);
    } catch (error) {
      verifyError(error);
    }
  }

  static async DELETE(url: string, config = configuracionRequest.config) {
    try {
      return await Axios.delete(url, config);
    } catch (error) {
      verifyError(error);
    }
  }

  static async PATCH(
    url: string,
    data: object,
    config = configuracionRequest.config
  ) {
    try {
      return await Axios.patch(url, data, config);
    } catch (error) {
      verifyError(error);
    }
  }
}
