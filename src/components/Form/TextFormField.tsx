import React, { ReactNode } from "react";
import {
  MenuItem,
  TextField,
  TextFieldProps,
  FormControlLabel,
  Checkbox,
  Tooltip,
  FormHelperText,
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Chip,
  OutlinedInput,
  FormLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Controller } from "react-hook-form";
import {
  DatePicker,
  KeyboardDatePicker,
  TimePicker,
} from "@material-ui/pickers";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Select, { SelectProps } from "@material-ui/core/Select";

export const TypeFieldCustom = {
  AUTOCOMPLETE: "AUTOCOMPLETE",
  DATE: "DATE",
  DATE_KEYBOARD: "DATE_KEYBOARD",
  TIME: "TIME",
  CHECKBOX: "CHECKBOX",
  MULTIPLE: "MULTIPLE",
  RADIO:"RADIO"
};

// Aqui se agrega mas values si es necesario
export type SchemaValue = {
  type: string;
  label: string;
  options?: Option[] | any[];
  select?: boolean;
  getOptionLabel?: (v: any) => string;
};

export type FormSchema = {
  [key: string]: SchemaValue;
};

export type Option = {
  value: string;
  label: string;
};

// Aqui se agrega mas values si es necesario
type TextFormProps = {
  typeField?: string;
  control: any;
  name: string;
  errors: any;
  options?: Option[] | any[]; //required Select, Autocomplete
  getOptionLabel?: (v: any) => string; //required autocomplete
  labelPlacement?: any;
  renderSelected?: (s: any[], o: any[]) => ReactNode | any;
};

type TextForm = TextFieldProps & TextFormProps & SelectProps & any;

const TextFormField = (props: TextForm) => {
  const {
    control,
    defaultValue,
    size,
    renderSelected,
    name,
    errors,
    options,
    typeField,
    getOptionLabel,
    ...rest
  } = props;

  const getOptions = () => {
    if (!options || !props.select) return [];
    return options.map((option: Option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ));
  };

  const checkBox = () => {
    return (
      <Controller
        name={name}
        defaultValue=""
        control={control}
        render={({ field }) =>
          props.labelPlacement ? (
            <FormControl error={errors[name] ?? false}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      checked={props.value as boolean}
                      inputProps={{ "aria-label": "primary checkbox" }}
                      {...field}
                    />
                  }
                  label={props.label}
                  labelPlacement={props.labelPlacement}
                />
              </FormGroup>
              <FormHelperText>
                {errors[name] ? errors[name].message : rest.helperText ?? ""}
              </FormHelperText>
            </FormControl>
          ) : (
            <Tooltip title={props.label as String}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                checked={props.value as boolean}
                inputProps={{ "aria-label": "primary checkbox" }}
                {...field}
              />
            </Tooltip>
          )
        }
      ></Controller>
    );
  };

  const textMultiple = () => {
    return (
      <Controller
        name={name}
        defaultValue=""
        control={control}
        render={({ field }) => {
          return (
            <FormControl fullWidth variant={rest.variant} size={size}>
              <InputLabel htmlFor="demo-mutiple-chip">{rest.label}</InputLabel>
              <Select
                fullWidth
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                variant={rest.variant}
                {...rest}
                {...field}
                error={Boolean(errors[name])}
                value={field.value ?? []}
                /* input={
              <OutlinedInput
                name={name}
                label={rest.label}
              />
            } */
                renderValue={(selected) =>
                  renderSelected &&
                  renderSelected(selected as any[], options ?? [])
                }
              >
                {getOptions()}
              </Select>
              <FormHelperText error={Boolean(errors[name])}>
                {errors[name] ? errors[name].message : rest.helperText ?? ""}
              </FormHelperText>
            </FormControl>
          );
        }}
      />
    );
  };

  const textfield = () => {
    return (
      <Controller
        name={name}
        defaultValue={defaultValue ?? ""}
        control={control}
        render={({ field }) => (
          <TextField
            {...rest}
            {...field}
            size={size}
            value={field.value ?? ""}
            fullWidth={true}
            error={Boolean(errors[name])}
            helperText={
              errors[name] ? errors[name].message : rest.helperText ?? ""
            }
          >
            {getOptions()}
          </TextField>
        )}
      />
    );
  };

  const autocomplete = () => {
    return (
      <Controller
        name={name}
        defaultValue={null}
        control={control}
        render={({ field }) => (
          <Autocomplete
            id="id-autocomplete"
            onInputChange={rest?.onInputChange}
            options={options ?? []}
            value={field.value ?? null}
            onChange={(_, v) => {
              field.onChange(v);
            }}
            disabled={rest?.disabled}
            getOptionLabel={getOptionLabel}
            noOptionsText="No hay resultados"
            size={size}
            renderInput={(params) => (
              <TextField
                {...params}
                label={props.label}
                fullWidth={true}
                variant={props.variant}
                error={Boolean(errors[name])}
                helperText={errors[name]?.message}
              />
            )}
          />
        )}
      />
    );
  };

  const datePiker = () => {
    return (
      <Controller
        name={name}
        defaultValue={null}
        control={control}
        render={({ field }) => (
          <DatePicker
            autoOk
            size={size}
            label={props.label}
            inputVariant={props.variant}
            format="dd/MM/yyyy"
            value={field.value ?? null}
            fullWidth
            error={Boolean(errors[name])}
            helperText={errors[name]?.message}
            onChange={field.onChange}
          />
        )}
      />
    );
  };

  const keyboardDatePiker = () => {
    return (
      <Controller
        name={name}
        defaultValue={null}
        control={control}
        render={({ field }) => (
          <KeyboardDatePicker
            autoOk
            size={size}
            label={props.label}
            inputVariant={props.variant}
            format="dd/MM/yyyy"
            value={field.value ?? null}
            fullWidth
            error={Boolean(errors[name])}
            helperText={errors[name]?.message}
            onChange={field.onChange}
          />
        )}
      />
    );
  };

  const radioInput = () => {
    return (
      <Controller
        name={name}
        defaultValue={null}
        control={control}
        render={({ field }) => (
          <FormControl
            size={size}
            component="fieldset"
            error={Boolean(errors[name])}
          >
            <FormLabel component="legend">{props.label}</FormLabel>
            <FormHelperText>{errors[name]?.message}</FormHelperText>
            <RadioGroup
              aria-label="formaEntrega"
              name="formaEntrega"
              value={field.value ?? null}
              onChange={(e: any) => field.onChange(e)}
            >
              {options.map((v: any) => (
                <FormControlLabel
                  value={v.value}
                  control={<Radio />}
                  label={v.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}
      />
    );
  };
  const timepicker = () => {
    return (
      <Controller
        name={name}
        defaultValue={null}
        control={control}
        render={({ field }) => (
          <TimePicker
            autoOk
            size={size}
            label={props.label}
            inputVariant={props.variant}
            value={field.value ?? null}
            fullWidth
            error={Boolean(errors[name])}
            helperText={errors[name]?.message}
            onChange={(v) => {
              field.onChange(v);
            }}
          />
        )}
      />
    );
  };

  const getField = () => {
    switch (rest.type) {
      case TypeFieldCustom.AUTOCOMPLETE:
        return autocomplete();
      case TypeFieldCustom.TIME:
        return timepicker();
      case TypeFieldCustom.DATE:
        return datePiker();
      case TypeFieldCustom.DATE_KEYBOARD:
        return keyboardDatePiker();
      case TypeFieldCustom.CHECKBOX:
        return checkBox();
      case TypeFieldCustom.MULTIPLE:
        return textMultiple();
      case TypeFieldCustom.RADIO:
        return radioInput();
      default:
        return textfield();
    }
  };

  return getField();
};

export default TextFormField;
