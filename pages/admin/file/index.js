import React from "react";
import Navigation from "../../../components/admin/Navigation";
import Sidebar from "../../../components/admin/Sidebar";

const File = () => {
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
        <header className={style.dashboardText}>Files</header>
        {/* <div className="">
           <Cards />
         </div>
         <div>
           <DashboardSecondSection />
         </div> */}
      </div>
    </section>
  );
};

export default File;
