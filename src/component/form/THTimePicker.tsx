import { DatePicker, Form, TimePicker } from "antd";

import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
};

const THTimepicker = ({ label, name }: TDatePickerProps) => {
    return (
      <div className="">
       <Form.Item label={label}>
        <Controller
          //   control={control}
          name={name}
          render={({ field }) => (
            <TimePicker
            {...field} style={{width:'100%'}}
             className="rounded-md px-2 py-1"
              format="HH:mm"
            />
            )}
          />
       </Form.Item>
      </div>
    );
  };

export default THTimepicker;
