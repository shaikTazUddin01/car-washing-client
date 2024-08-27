import { Button, Modal } from "antd";
import React, { useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import THForm from "../../form/THForm";
import THInput from "../../form/THInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUpdateServicesMutation } from "../../../redux/services/servicesApi";
import { toast } from "sonner";
import { TResponse, TServices } from "../../../Types";

const UpdateServices = ({ item }: { item: TServices }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   console.log(item.key);
  // add service mutation
  const [updateService] = useUpdateServicesMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //   update service
  const submit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const serviceItem = {
      ...data,
      price: Number(data.price),
      duration: Number(data.duration),
    };

    console.log(serviceItem);
    const toastId = toast.loading("loading..");

    try {
      const serviceInfo = {
        id: item.key,
        serviceItem,
      };
      const res = (await updateService(serviceInfo)) as TResponse<any>;

      if (res?.data) {
        toast.success("Update service.", {
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
        Edit
      </button>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <div className="pt-10">
          <SectionTitle title="Update Services" />
          <div className="bg-[#c0bfbf] rounded-xl p-5">
            <THForm onSubmit={submit}>
              <THInput
                name="image"
                label="Image Url"
                type="text"
                defaultFieldValue={item.image}
              ></THInput>
              <THInput
                name="name"
                label="Service Name"
                type="text"
                defaultFieldValue={item.name}
              ></THInput>

              <THInput
                name="price"
                label="Service Cost"
                type="text"
                defaultFieldValue={item.price}
              ></THInput>
              <THInput
                name="duration"
                label="Service Duration"
                type="text"
                defaultFieldValue={item.duration}
              ></THInput>

              <Button className="w-full mt-3" htmlType="submit" type="primary">
                Update Service
              </Button>
            </THForm>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateServices;
