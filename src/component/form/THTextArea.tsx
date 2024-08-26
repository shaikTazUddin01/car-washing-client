
import { useFormContext } from "react-hook-form";

type TTextArea = {
  label: string;
  name: string;
};

const THTextArea = ({ label, name }: TTextArea) => {
  const { register } = useFormContext();
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        placeholder={`${label}`}
        className="input input-bordered"
        {...register(name)}
        required
      />
    </div>
  );
};

export default THTextArea;
