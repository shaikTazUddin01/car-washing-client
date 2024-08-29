import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultFieldValue?: string | number;
  disabled?: boolean;
};

const THInputAuthFill = ({
  type,
  name,
  label,
  defaultFieldValue,
  disabled,
}: TInputProps) => {
  const { control } = useFormContext(); 

  return (
    <div className="">
      <Form.Item label={label}>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Input
              {...field}
              type={type}
              className="rounded-md px-2 py-1"
              placeholder={`Enter Your ${name}`}
              value={field.value || defaultFieldValue} 
              onChange={(e) => field.onChange(e.target.value)}
              disabled={disabled}
            />
          )}
        />
      </Form.Item>
    </div>
  );
};

export default THInputAuthFill;
