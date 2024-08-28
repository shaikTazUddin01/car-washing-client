import user from "../../../assets/userimg.png";
import SectionTitle from "../../../component/shared/SectionTitle";
import UpdateProfile from "../../../component/userDashboard/UpdateProfile";
import { useMyAccountInFoQuery } from "../../../redux/auth/authApi";
import { useAppSelector } from "../../../redux/hooks/hooks";

const Dashboard = () => {
    const authId =useAppSelector(state=>state.auth.user?.AuthId)
    const {data,isLoading}=useMyAccountInFoQuery(authId)
    if (isLoading) {
        return <p>Loading..</p>
    }
   const userInFo=data?.data
  return (
    <div className="flex justify-center flex-col items-center">
      <SectionTitle title="User Information"></SectionTitle>
      <div className="running-light-border bg-[#00112f] flex justify-center items-center w-2/3 rounded-2xl py-14 px-8">
        <div className="mx-auto ">
          <img src={user} alt="" className="h-40" />
        </div>
        <div className=" text-xl text-white space-y-2">
          <h1>Name : {userInFo?.name}</h1>
          {/* <h1>Role : User</h1> */}
          <h1>Email : {userInFo?.email}</h1>
          <h1>Phone : {userInFo?.phone}</h1>
          <h1>Address : {userInFo?.address}</h1>

          <UpdateProfile userinfo={userInFo}/>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
