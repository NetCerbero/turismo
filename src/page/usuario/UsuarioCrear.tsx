import { Grid } from "@material-ui/core";
import TextFormField from "components/Form/TextFormField";
import Page from "components/Page";
import { useForm } from "react-hook-form";
import { UsuarioSchema, UsuarioValidation } from "./config/usuario.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormPaper from "components/Form/FormPaper";
import ActionForm from "components/comun/ActionForm";

export default function UsuarioCrear(props: any) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(UsuarioValidation) });

  const onSubmit = (data: any) => {
    console.log("onSubmit", data);
  };

  const ViewForm = (schema: any) => {
    return Object.keys(schema).map((key: any) => {
      return (
        <Grid item {...schema[key].grid}>
          <TextFormField
            control={control}
            errors={errors}
            name={key}
            {...schema[key]}
          />
        </Grid>
      );
    });
  };

  return (
    <Page>
      <FormPaper title="Crear usuario">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            {ViewForm(UsuarioSchema)}
            <ActionForm />
          </Grid>
        </form>
      </FormPaper>
    </Page>
  );
}
