const HOST_PRINTER = "HOST_PRINTER";
const DEFAULT_HOST = "http://192.168.0.250:8000";
class PrintConfig {
  static getHost() {
    const host = localStorage.getItem(HOST_PRINTER);
    return host ? host : DEFAULT_HOST;
  }

  static setHost(host: any) {
    localStorage.setItem(HOST_PRINTER, host);
  }
}
export function itemBuildAlign(
  txt: any,
  { align = "left", cantidad = null }: any
) {
  txt = (txt ?? "")
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if ([null, undefined].includes(cantidad)) {
    return txt;
  }
  if (txt.length > cantidad) {
    return txt.slice(0, cantidad);
  }
  let cantEspAgregar = cantidad - txt.length;
  let cantEspIzq = 0;
  let cantEspDer = 0;
  switch (align) {
    case "center":
      cantEspIzq = Math.trunc(cantEspAgregar / 2);
      cantEspDer = cantEspAgregar - cantEspIzq;
      break;
    case "left":
      cantEspDer = cantEspAgregar;
      break;
    case "right":
      cantEspIzq = cantEspAgregar;
      break;
  }
  txt = " ".repeat(cantEspIzq) + txt + " ".repeat(cantEspDer);
  return txt;
}
export function itemBuild(txt: any, cantidad: number | any = null) {
  txt = (txt ?? "")
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if ([null, undefined].includes(cantidad)) {
    return txt;
  }
  if (txt.length > cantidad) {
    return txt.slice(0, cantidad);
  }
  return txt.padEnd(cantidad);
}

export default PrintConfig;
