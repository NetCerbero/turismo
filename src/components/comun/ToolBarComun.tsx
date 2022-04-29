import react from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router";
import Box from "@material-ui/core/Box";
export default function ToolBarComun(props: any) {
  const { texto = "Nuevo", link, textBack = "Atrás", linkBack } = props;
  const navigate = useNavigate();
  return (
    <Box mb={1}>
      <Grid container spacing={linkBack ? 1 : 0} justifyContent="flex-end">
        {linkBack && (
          <Grid item>
            <Button variant="contained" onClick={() => navigate(linkBack)}>
              {textBack}
            </Button>
          </Grid>
        )}
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(link)}
          >
            {texto}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
