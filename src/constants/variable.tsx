export const ROLES: any = {
  ADMINISTRADOR: "10",
  PERSONAL: "11",
};

export const ROLES_STRING: any = {
  [ROLES.ADMINISTRADOR]: "Administrador Tuvi",
  [ROLES.PERSONAL]: "Staff Tuvi",
};

export const FORMA_PAGO = {
  EFECTIVO: "1",
  TRANSFERENCIA: "2",
  QR_SIMPLE: "3",
};
export const FORMA_PAGO_STRING: any = {
  [FORMA_PAGO.EFECTIVO]: "Efectivo",
  [FORMA_PAGO.TRANSFERENCIA]: "Transferencia bancaria",
  [FORMA_PAGO.QR_SIMPLE]: "QR Simple",
};

export const FORMA_ENTREGA = {
  LOCAL: "1",
  PARA_LLEVAR: "2",
};
export const FORMA_ENTREGA_STRING: any = {
  [FORMA_ENTREGA.LOCAL]: "Para la mesa",
  [FORMA_ENTREGA.PARA_LLEVAR]: "Para llevar",
};
