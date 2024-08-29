import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TResponse, TUser } from "../../../Types";
import { Modal } from "antd";
import SectionTitle from "../../shared/SectionTitle";
import THForm from "../../form/THForm";

import THSelect from "../../form/THSelect";
import { useUpdateslotMutation } from "../../../redux/slot/slotApi";


const UpdateSlotStatus = ({ item }: { item: Partial<TUser> }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [updateSlotStatus] = useUpdateslotMutation();
//   console.log(item);
  const roleOption=[
    {
        value:'available',
        label:"Available"
    },
    {
        value:'canceled',
        label:"Canceled"
    }
  ]

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //   update status
  const submit: SubmitHandler<FieldValues> = async (data) => {
   
// console.log(data);
    
    const toastId = toast.loading("loading..");

    try {
     const updateStatus={
        id:item?.key,
        data
     }
    //  console.log(updateStatus);
      const res = (await updateSlotStatus(updateStatus)) as TResponse<any>;

      if (res?.data) {
        toast.success("Update status.", {
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
        Update Status
      </button>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <div className="pt-10">
          <SectionTitle title="Update Status" />
          <div className="bg-[#c0bfbf] rounded-xl p-5">
            <THForm onSubmit={submit}>
             <THSelect name="isBooked" label="Status" options={roleOption}></THSelect>
             

              <button className="btn btn-neutral btn-sm " type="submit">Update Status</button>
            </THForm>
          </div>
        </div>
      </Modal>
    </>
  );
};



export default UpdateSlotStatus;