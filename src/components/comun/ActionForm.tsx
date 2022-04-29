import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { ATRAS, GUARDAR } from "constants/index";

export default function ActionForm(props: any) {
  const {hiddenBack=false,disabledSave=false} = props;
  return (
    <Grid item xs={12} container justifyContent="flex-end" spacing={1}>
      {!hiddenBack && <Grid item>
        <Button variant="contained" onClick={props.back}>
          {props.backText ?? ATRAS}
        </Button>
      </Grid>}
      <Grid item>
        <Button disabled={disabledSave} type="submit" variant="contained" color="primary">
          {props.saveText ?? GUARDAR}
        </Button>
      </Grid>
    </Grid>
  );
}
