import format from "date-fns/format";
import { es } from "date-fns/esm/locale";

export function FormatDT(dt: Date, ft: string = "dd MMMM yyyy, HH:mm a") {
  try {
    return format(new Date(dt), ft, {
      locale: es,
    });
  } catch (error) {
    return "Sin fecha y hr";
  }
}

export function SN(data: any) {
  return data
    ? data?.toString().trim().length > 0 ?? true
      ? data
      : "S/N"
    : "S/N";
}
