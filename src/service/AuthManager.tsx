import { AuthService } from "./AuthService";

export class AuthManager {
  static async Login(usuario: string, password: string, cb: () => void) {
    const { data }: any = await AuthService.login(usuario, password);
    AuthManager._saveToken(data.data);
    cb();
  }
  static async Logout(cb: () => void) {
    await AuthService.logOut()
      .then(({ data }: any) => {
        //
      })
      .finally(() => {
        AuthManager.logout();
        cb();
      });
  }

  static logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
  }

  private static _saveToken({auth:{accessToken, refreshToken}, ...rest }: any) {
    AuthManager.saveToken(accessToken);
    AuthManager.saveResfreshToken(refreshToken);
    AuthManager.saveUser(rest);
  }

  static saveUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  static saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  static saveResfreshToken(refreshToken: string) {
    localStorage.setItem("refresh", refreshToken);
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static getUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  static getRefreshToken() {
    return localStorage.getItem("refresh");
  }

  static isLogin() {
    return true;
    //return localStorage.getItem("token") ? true : false;
  }
}
