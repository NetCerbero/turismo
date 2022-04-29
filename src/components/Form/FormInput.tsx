import React from "react";
import { TextFieldProps, TextField, MenuItem } from "@material-ui/core";
import { useController } from "react-hook-form";

export default function FormInput(props: TextFieldProps) {
  return <TextField {...props}></TextField>;
}

export function InputForm({ control, name, options, ...rest }: any) {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    defaultValue: "",
  });
  const renderOption = () => {
    let nwOpt = options.map((option: any) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ));
    return [
      <MenuItem key="ninguna" value={""}>
        Ninguna
      </MenuItem>,
      ...nwOpt,
    ];
  };

  return (
    <TextField {...inputProps} inputRef={ref} fullWidth {...rest}>
      {rest.select && options && renderOption()}
    </TextField>
  );
}
