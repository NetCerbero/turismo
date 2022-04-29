import Page from "components/Page";
import MaterialTable from "@material-table/core";
import { useState } from "react";
import { Box, Button, Grid } from "@material-ui/core";
import { ROUTE_PAGE } from "config/RoutePage";
import { useNavigate } from "react-router";
export default function Usuario(props: any): JSX.Element {
  const [list, setList] = useState<any[]>([]);
  const navigate = useNavigate();

  return (
    <Page>
      <Box mb={1} display="flex" justifyContent="flex-end">
        <Button
          onClick={() => navigate(ROUTE_PAGE.USUARIO.CREAR)}
          variant="contained"
          color="primary"
        >
          NUEVO
        </Button>
      </Box>
      <MaterialTable
        data={list}
        columns={[
          {
            field: "id",
            title: "ID",
          },
        ]}
      />
    </Page>
  );
}
