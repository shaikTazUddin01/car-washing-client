
import {  Col, Layout } from "antd";

import { Outlet } from "react-router-dom";
import {  Toaster } from "sonner";

import Sidebar from "./SIdeBar";
// import { useAppDispatch } from "../redux/hooks/hooks";

import { useMyBookingQuery } from "../redux/bookingSlot/bookingSlotApi";
import Countdown from "../pages/Dashboard/userDeshboard/Countdown";


const { Header, Content } = Layout;

const DashboardLayOut: React.FC = () => {
  const { data: myBooking } = useMyBookingQuery(undefined);

  // const dispatch = useAppDispatch();
  //   const user = useAppSelector((state) => state.adminLoginInfo);

  // const [openCollapse, SetOpenCollapse] = useState(false);

  // const handleLogout = () => {
  //   dispatch(logOut());
  //   toast.warning("our are logged out", {
  //     duration: 1500,
  //   });
  // };

  // coundown time
  // get all my booking
  // current date

  const todayDate = new Date();
  let upcomingBooking

  if (myBooking?.data) {
    upcomingBooking = myBooking?.data?.find((item: any) => {
      const bookingDate = new Date(
        item?.slot?.date + "T" + item?.slot?.startTime
      );
  
      return bookingDate > todayDate;
    });
  }

  console.log(upcomingBooking);

  return (
    <Layout className="min-h-[100%]">
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0 }}>
          <div className="flex justify-end pt-3 pr-5">
            <div className="flex items-center justify-between text-white">
            {
              upcomingBooking ?
              <Countdown
                date={upcomingBooking?.slot?.date}
                startTime={upcomingBooking?.slot?.startTime}
                title="Next Slot"
              />
              : " "
            }
              {/* <button
                className="btn btn-success btn-sm"
                onClick={() => handleLogout()}
              >
                logout
              </button> */}
            </div>
          </div>
        </Header>
        <Col lg={{ span: 20, offset: 4 }}>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                position: "relative",
              }}
            >
              <Outlet></Outlet>
              <Toaster></Toaster>
            </div>
          </Content>
        </Col>
      </Layout>
    </Layout>
  );
};

export default DashboardLayOut;
