import { ServerRequest } from "./ServerRequest/ServerRequest";
import { API } from "service/Api";
export class AuthService {
  static login(usuario: string, password: string) {
    return ServerRequest.POST(API.AUTH.LOGIN, {
      data: { usuario, password },
      parse: false,
      config: {},
    });
  }
  static logOut() {
    return ServerRequest.POST(API.AUTH.LOGOUT);
  }
}
