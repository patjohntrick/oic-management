import axios from "axios";
import React, { useContext, useEffect, useRef } from "react";
import Cards from "../../components/admin/Dashboard/Cards";
import Content from "../../components/admin/Dashboard/Content";
import DashboardSecondSection from "../../components/admin/Dashboard/DashboardSecondSection";
import Navigation from "../../components/admin/Navigation";
import Sidebar from "../../components/admin/Sidebar";
import { UserContext } from "../../context/UserContext";

const baseUri = "http://localhost:5000";
export const getStaticProps = async () => {
  const res = await axios.get(`${baseUri}/user/dashboard`);
  const data = await res.data;
  return {
    props: { dashboadUserList: data },
  };
};

const Dashboard = ({ dashboadUserList }) => {
  // Camera
  // const videoRef = useRef(null);
  // const getUserCamera = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({
  //       video: true,
  //     })
  //     .then((stream) => {
  //       const video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch((e) => console.error(e));
  // };
  // useEffect(() => {
  //   getUserCamera();
  // }, [videoRef]);
  // Style
  const style = {
    body: "h-screen relative",
    aside: "fixed w-[20%] z-20",
    header: "fixed w-[80%] ml-[20%] z-20",
    cardContainer:
      "absolute top-[10vh] left-[20%] w-[80%] px-6 py-4 bg-purple-100 min-h-[90vh]",
    cardWrapper: "flex",
    dashboardText: " text-2xl text-[#444a53] font-medium mb-2",
  };
  return (
    <section className={style.body}>
      {/* <header className={style.header}>
        <Navigation />
      </header>
      
      <aside className={style.aside}>
        <Sidebar />
      </aside> */}
      {/* content */}
      <div className={`${style.cardContainer} container`}>
        <header className={style.dashboardText}>Dashboard</header>
        {/* <video ref={videoRef} className="w-[100px] h-[100px] border-2" /> */}
        <div className="">
          <UserContext.Provider value={dashboadUserList}>
            <Content />
          </UserContext.Provider>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
