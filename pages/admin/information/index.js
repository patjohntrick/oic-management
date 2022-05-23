import React from "react";
import FirstSection from "../../../components/admin/Information/FirstSection";
import Header from "../../../components/admin/Information/Header";
import Navigation from "../../../components/admin/Navigation";
import Sidebar from "../../../components/admin/Sidebar";

const Information = () => {
  const style = {
    body: "h-screen relative",
    aside: "fixed w-[20%] z-20",
    header: "fixed w-[80%] ml-[20%] z-20",
    cardContainer:
      "absolute top-[10vh] left-[20%] w-[80%] px-6 py-4 bg-purple-100 h-[90vh]",
    cardWrapper: "flex",
    dashboardText: " text-2xl text-[#444a53] font-medium mb-2",
  };
  return (
    <section className={style.body}>
      {/* header */}
      <header className={style.header}>
        <Navigation />
      </header>
      {/* sidebar */}
      <aside className={style.aside}>
        <Sidebar />
      </aside>
      {/* content */}
      <div className={`${style.cardContainer} container`}>
        <header className={style.dashboardText}>Information</header>
        <div className="">
          <Header />
        </div>
        <div className="">
          <FirstSection />
        </div>
        {/* <div>
           <DashboardSecondSection />
         </div> */}
      </div>
    </section>
  );
};

export default Information;
