import React from "react";
import Cards from "../../components/admin/Cards";
import Navigation from "../../components/admin/Navigation";
import Sidebar from "../../components/admin/Sidebar";

const Dashboard = () => {
  // Style
  const style = {
    body: "bg-body h-screen",
    aside: "fixed w-[20%]",
    header: "fixed w-[80%] ml-[20%]",
  };
  return (
    <section className={style.body}>
      <div className="container">
        <header className={style.header}>
          <Navigation />
        </header>

        <aside className={style.aside}>
          <Sidebar />
        </aside>

        {/* <section className="relative pl-[20%] pt-[65px] w-screen ">
          <Cards />
        </section> */}
      </div>
    </section>
  );
};

export default Dashboard;
