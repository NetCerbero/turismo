import React, { ReactNode } from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle, Color } from "@material-ui/lab";
import Button from "@material-ui/core/Button";

export interface AlertProps {
  message: string | ReactNode;
  link?: string;
  title?: string;
  severity?: Color;
  buttonText?: string;
  buttons?: ReactNode;
}

interface FormPaperProps {
  title?: string | ReactNode;
  children?: Node | ReactNode|any;
  loading?: boolean;
  alert?: AlertProps;
  classNameBody?: string;
  classNameTitle?: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  title: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: "1rem",
    textTransform: "uppercase",
  },
}));

const isValid = (value: any) => value !== undefined && value !== null;

const alertValidator = (value: AlertProps | any) => isValid(value);

export default function FormPaper(props: FormPaperProps) {
  const classes = useStyles();
  const isAlertValid = alertValidator(props?.alert);
  return (
    <Paper elevation={2}>
      {props.title ? (
        <>
          <div className={[classes.title, props.classNameTitle].join(" ")}>
            {props.title}
          </div>
          <Divider />
        </>
      ) : null}

      <LinearProgress hidden={!props.loading} />
      <Collapse in={isAlertValid}>
        {isAlertValid && (
          <Alert
            severity={props?.alert?.severity ? props?.alert.severity : "error"}
            action={
              props?.alert?.buttons ? (
                props.alert.buttons
              ) : (
                <Button
                  color="inherit"
                  size="small"
                  variant="text"
                  href={props?.alert?.link}
                >
                  {props?.alert?.buttonText}
                </Button>
              )
            }
          >
            {isValid(props?.alert?.title) && (
              <AlertTitle> {props?.alert?.title}</AlertTitle>
            )}
            {props?.alert?.message}
          </Alert>
        )}
      </Collapse>
      <Box className={[classes.paper, props.classNameBody].join(" ")}>
        {props.children}
      </Box>
    </Paper>
  );
}
