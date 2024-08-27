import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type TPhSelectProps = {
  label: string;
  name: string;
  options:
    | {
        key?: string;
        value: string;
        label: string;
        disabled?: boolean;
      }[]
    | undefined;
  mode?: "multiple" | undefined;
  onValueChange: (value:any)=>void;
  disabled?: boolean;

};

const THSelectWithWatch = ({ label, name, options, mode,onValueChange,disabled}: TPhSelectProps) => {

const {control}=useFormContext()

const inputValue=useWatch({
    control,
    name
})

useEffect(()=>{
  onValueChange(inputValue)
},[onValueChange,inputValue])


// console.log(inputValue);

  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={`${label} :`}>
          <Select
            placeholder={`Select ${label}`}
            disabled={disabled}
            style={{ width: "100%" }}
            mode={mode}
            {...field}
            options={options}
          />
          {error && <small className="text-red-600">{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};


export default THSelectWithWatch;