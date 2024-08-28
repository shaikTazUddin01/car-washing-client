import { Button, Modal } from "antd";
import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import THForm from "../form/THForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { TResponse, TUser } from "../../Types";
import THInput from "../form/THInput";
import { useUpdateMyAccountInFoMutation } from "../../redux/auth/authApi";
import { toast } from "sonner";

const UpdateProfile = ({ userinfo }: Record<string, any>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateAccountInFo] = useUpdateMyAccountInFoMutation();
  //   console.log(item.key);
  // add service mutation
  // console.log(userinfo);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //   update profile
  const submit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    // const serviceItem = {
    //   ...data,
    //   price: Number(data.price),
    //   duration: Number(data.duration),
    // };

    // console.log(serviceItem);
    const toastId = toast.loading("loading..");

    try {
      const updatedInFo = {
        id: userinfo?._id,
        data,
      };
      const res = (await updateAccountInFo(updatedInFo)) as TResponse<any>;
      // console.log("data-->",res);
      if (res?.data) {
        toast.success("Information Updated", {
          id: toastId,
          duration: 1500,
        });
        handleCancel();
      } else {
        toast.error(res?.error?.data?.message, {
          id: toastId,
          duration: 1500,
        });
      }
    } catch (error) {
      toast.error("something is wrong please try again", {
        id: toastId,
        duration: 1500,
      });
    }
  };
  return (
    <>
      <button className="btn btn-success btn-sm" onClick={showModal}>
        Update InFo
      </button>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <div className="pt-10">
          <SectionTitle title="Update Profile" />
          <div className="bg-[#c0bfbf] rounded-xl p-5">
            <THForm onSubmit={submit}>
              <THInput
                name="name"
                label="Name"
                type="text"
                defaultFieldValue={userinfo?.name}
              ></THInput>

              <THInput
                name="phone"
                label="Phone"
                type="text"
                defaultFieldValue={userinfo?.phone}
              ></THInput>
              <THInput
                name="address"
                label="Address"
                type="text"
                defaultFieldValue={userinfo?.address}
              ></THInput>

              <Button className="w-full mt-3" htmlType="submit" type="primary">
                Update Profile
              </Button>
            </THForm>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateProfile;
