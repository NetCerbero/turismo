export interface ConfiguracionRequest {
  parse?: boolean;
  config: Object;
  query?: Object | any;
}
export const configuracionRequest: ConfiguracionRequest = {
  parse: true,
  config: { withCredentials: true },
  query: {},
};

export function WrapHandleError(props: any, type: any) {
  return { ...props, type };
}
