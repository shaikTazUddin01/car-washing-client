import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultFieldValue?:string | number;
};

const THInput = ({ type, name, label,defaultFieldValue }:TInputProps) => {
  return (
    <div className="">
     <Form.Item label={label}>
      <Controller
        //   control={control}
        name={name}
        defaultValue={defaultFieldValue}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            className="rounded-md px-2 py-1"
            placeholder={`Enter Your ${name}`}
          />
        )}
      />
     </Form.Item>
    </div>
  );
};

export default THInput;