import { ValidateMessage } from "config/ValidateMessage";
import * as yup from "yup";
export const UsuarioSchema = {
  nombre: {
    type: "text",
    label: "Nombre",
  },
  apellido: {
    type: "text",
    label: "Apellido",
  },
};

export const UsuarioValidation = yup.object().shape({
  nombre: yup.string().required(ValidateMessage.REQUERIDO),
  apellido: yup.string().required(ValidateMessage.REQUERIDO),
});
