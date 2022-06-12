import React, { createContext, useEffect } from "react";
import { useRouter } from "next/router";
import Content from "../../components/admin/Dashboard/Content";

const baseUri = "https://oic-management.herokuapp.com";
export const getStaticProps = async () => {
  const [userResponse, moneyResponse, otherResponse, activitiesResponse] =
    await Promise.all([
      fetch(`${baseUri}/user`),
      fetch(`${baseUri}/donation/money`),
      fetch(`${baseUri}/donation/other`),
      fetch(`${baseUri}/activity`),
    ]);
  const user = await userResponse.json();
  const money = await moneyResponse.json();
  const other = await otherResponse.json();
  const activities = await activitiesResponse.json();

  return {
    props: { user, money, other, activities },
  };
};

// local context
export const DashboardContext = createContext();

// maint component
const Dashboard = ({ user, money, other, activities }) => {
  // Camera
  useEffect(() => {
    user, money, other, activities;
  }, [user, money, other, activities]);
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

  // style
  const style = {
    body: "h-screen relative",
    aside: "fixed w-[20%] z-20",
    header: "fixed w-[80%] ml-[20%] z-20",
    cardContainer:
      "absolute top-[10vh] left-[20%] w-[80%] px-6 py-4 bg-purple-100 min-h-[90vh]",
    cardWrapper: "flex",
    dashboardText: " text-2xl text-[#444a53] font-medium mb-2",
  };

  // router
  const router = useRouter();

  // localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, []);

  return (
    <section className={style.body}>
      <div className={`${style.cardContainer} container`}>
        <header className={style.dashboardText}>Dashboard</header>
        {/* <video ref={videoRef} className="w-[100px] h-[100px] border-2" /> */}
        <div className="">
          <DashboardContext.Provider value={{ user, money, other, activities }}>
            <Content />
          </DashboardContext.Provider>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
