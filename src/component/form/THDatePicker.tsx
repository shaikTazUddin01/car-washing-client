import { DatePicker, Form } from "antd";

import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
};

const THDatePicker = ({ label, name }: TDatePickerProps) => {
    return (
      <div className="">
       <Form.Item label={label}>
        <Controller
          //   control={control}
          name={name}
          render={({ field }) => (
          <DatePicker
          {...field} style={{width:'100%'}}
           className="rounded-md px-2 py-1"
          
          />
          )}
        />
       </Form.Item>
      </div>
    );
  };

export default THDatePicker;
