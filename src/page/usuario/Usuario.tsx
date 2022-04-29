import Page from "components/Page";
import MaterialTable from "@material-table/core";
import { useState } from "react";
import { Box, Button, Grid } from "@material-ui/core";
export default function Usuario(props: any):JSX.Element{
  const [list, setList] = useState<any[]>([]);
  return (
    <Page>
      <Box mb={1} display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary">
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
