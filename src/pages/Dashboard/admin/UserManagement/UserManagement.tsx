import { Table } from "antd";
import type { TableColumnsType,  } from "antd";

import SectionTitle from "../../../../component/shared/SectionTitle";
import { useAllUserQuery } from "../../../../redux/auth/authApi";
import UpdateUserRole from "../../../../component/admin/userManagment/UpdateUserRole";

interface DataType {
  key: React.Key;
  name: string;
  price: number;
  address: string;
}

const UserManagement = () => {
  const { data: users, isLoading, isFetching } = useAllUserQuery(undefined);
  //   const [deleteService] = useDeleteServicesMutation();
  if (isLoading) {
    return <p>loading...</p>;
  }
  // handle delete
  //   const handleDelete =  (id: string) => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then(async(result) => {
  //       if (result.isConfirmed) {
  //         const toastId = toast.loading("loading...");
  //         const res = await deleteService(id) as TResponse<any>;
  //         // console.log(res);
  //         if (res?.data) {
  //           toast.warning("Delete SuccessFully", {
  //             id: toastId,
  //             duration: 1500,
  //           });
  //         } else {
  //           toast.error(res?.error?.data?.message, {
  //             id: toastId,
  //             duration: 1500,
  //           });
  //         }
  //       }
  //     });
  //   };

  const columns: TableColumnsType<DataType> = [
    {
      title: "User Image",
      dataIndex: "image",
      render: (item) => {
        return (
          <div>
            <img src={item} alt="" className="h-14 rounded-xl" />
          </div>
        );
      },
    },
    {
      title: "User Name",
      dataIndex: "name",
    },
    {
      title: "User Email",
      dataIndex: "email",
      // defaultSortOrder: "ascend",
    },
    {
      title: "User Phone",
      dataIndex: "phone",
    },
    {
      title: "User Role",
      dataIndex: "role",
      render: (item) => {
        return (
          <p
            className={`capitalize font-medium ${
              item == "admin" ? "text-green-600 " : "text-blue-600"
            }`}
          >
            {item}
          </p>
        );
      },
    },
    {
      title: "Action",
      render: (item) => {
        // console.log(item);
        return (
          <div className="flex gap-5">
            {/* <UpdateServices item={item}/> */}
            <UpdateUserRole item={item} />
          </div>
        );
      },
      width: "10%",
    },
  ];

  const data = users?.data?.map((item: any) => ({
    key: item._id,
    image: item?.image,
    name: item?.name,
    email: item?.email,
    phone: item?.phone,
    role: item?.role,
  }));

  return (
    <div className="min-h-screen">
      <SectionTitle title="User Management"></SectionTitle>
      <Table
        columns={columns}
        dataSource={data}
        //   onChange={onChange}
        loading={isFetching}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default UserManagement;
