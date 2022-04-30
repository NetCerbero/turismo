import MaterialTable from "@material-table/core";
import Page from "components/Page";
import AccessibleForwardIcon from "@material-ui/icons/AccessibleForward";
export default function Transporte(props: any) {
  return (
    <Page>
      <MaterialTable
        title="Lista de transporte"
        data={[{ nombre: "asa", id: "asdasd" }]}
        options={{
          actionsColumnIndex: -1,
        }}
        columns={[
          {
            field: "id",
            title: "IDENTIFICADOR",
          },
          {
            field: "nombre",
            title: "NOMBRE",
          },
        ]}
        actions={[
          {
            icon: () => <AccessibleForwardIcon />,
            tooltip: "ACTIOn",
            onClick: (e: any, data: any) => alert(JSON.stringify(data)),
          },
        ]}
      />
    </Page>
  );
}
