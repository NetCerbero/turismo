import { ValidateMessage } from "config/ValidateMessage";
import * as yup from "yup";
export const UsuarioSchema = {
  nombre: {
    type: "text",
    label: "Nombre",
    grid:{
      md:4,
      xs:12
    }
  },
  apellido: {
    type: "text",
    label: "Apellido",
    grid:{
      md:4,
      xs:12
    }
  },
  ubicacion: {
    type: "select",
    select:true,
    label: "UBicacion",
    options:[{value:1,label:"Santa cruz"},{value:2,label:"La paz"}],
    grid:{
      md:4,
      xs:12
    }
  },
  direccion: {
    type: "text",
    label: "Apellido",
    grid:{
      xs:12
    }
  },
};

export const UsuarioValidation = yup.object().shape({
  nombre: yup.string().required(ValidateMessage.REQUERIDO),
  apellido: yup.string().required(ValidateMessage.REQUERIDO),
  ubicacion:yup.number().typeError(ValidateMessage.REQUERIDO).required(ValidateMessage.REQUERIDO),
  direccion: yup.string().required(ValidateMessage.REQUERIDO),
});
