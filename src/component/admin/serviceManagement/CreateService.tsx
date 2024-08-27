import { Button, Modal } from "antd";
import React, { useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import THForm from "../../form/THForm";
import THInput from "../../form/THInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddServicesMutation } from "../../../redux/services/servicesApi";
import { toast } from "sonner";
import { TResponse } from "../../../Types";

const CreateService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // add service mutation
  const [addService] = useAddServicesMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const submit: SubmitHandler<FieldValues> = async (data) => {
   const serviceItem={
    ...data,
    price:Number(data.price),
    duration:Number(data.duration)
   }

    const toastId = toast.loading("loading..");
    
    try {
    
      const res = await addService(serviceItem) as TResponse<any>;
     
      if (res?.data) {
        toast.success("New Service Addedd .", {
          id: toastId,
          duration: 1500,
        });
        handleCancel()
        
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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <div className="pt-10">
          <SectionTitle title="Add Services" />
          <div className="bg-[#c0bfbf] rounded-xl p-5">
            <THForm onSubmit={submit}>
              <THInput name="name" label="Service Name" type="text"></THInput>
              <THInput name="image" label="Service Image" type="text"></THInput>
              <THInput name="price" label="Service Cost" type="text"></THInput>
              <THInput
                name="duration"
                label="Service Duration"
                type="text"
              ></THInput>
              <THInput
                name="description"
                label="Service Description"
                type="text"
              ></THInput>
              <Button className="w-full mt-3" htmlType="submit" type="primary">
                Create Service
              </Button>
            </THForm>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateService;
