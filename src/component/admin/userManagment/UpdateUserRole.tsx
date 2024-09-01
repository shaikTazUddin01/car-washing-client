import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TResponse, TUser } from "../../../Types";
import { Modal } from "antd";
import SectionTitle from "../../shared/SectionTitle";
import THForm from "../../form/THForm";
import THSelect from "../../form/THSelect";
import { useUpdateUserRoleMutation } from "../../../redux/auth/authApi";


const UpdateUserRole = ({ item }: { item: Partial<TUser> }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   console.log(item.key);
  // add service mutation
  const [updateRole]=useUpdateUserRoleMutation()
//   console.log(item);
  const roleOption=[
    {
        value:'admin',
        label:"admin"
    },
    {
        value:'user',
        label:"user"
    }
  ]

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //   update service
  const submit: SubmitHandler<FieldValues> = async (data) => {
   
// console.log(data);
    
    const toastId = toast.loading("loading..");

    try {
     const userRoleInfo={
        id:item?.key,
        data
     }
     console.log(userRoleInfo);
      const res = (await updateRole(userRoleInfo)) as TResponse<any>;

      if (res?.data) {
        toast.success("Update role.", {
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
        Update Role
      </button>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <div className="pt-10">
          <SectionTitle title="Update User Role" />
          <div className="bg-[#c0bfbf] rounded-xl p-5">
            <THForm onSubmit={submit}>
             <THSelect name="role" label="User Role" options={roleOption}></THSelect>
             

              <button className="btn btn-neutral btn-sm " type="submit">Update Role</button>
            </THForm>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateUserRole;
