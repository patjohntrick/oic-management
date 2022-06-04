import React from "react";
import Navigation from "../../../components/admin/Navigation";
import Sidebar from "../../../components/admin/Sidebar";

// test purpose
const baseUri = "http://localhost:5000";

export const getStaticProps = async () => {
  const [res, res2] = await Promise.all([
    fetch(`${baseUri}/user`),
    fetch(`${baseUri}/donation/money`),
  ]);
  const data = await res.json();
  const data2 = await res2.json();
  return {
    props: { users: data, donations: data2 },
  };
};

const Event = ({ users, donations }) => {
  console.log(users);
  console.log(donations);
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
      {/* <header className={style.header}>
        <Navigation />
      </header>
     
      <aside className={style.aside}>
        <Sidebar />
      </aside> */}

      <div className={`${style.cardContainer} container`}>
        <header className={style.dashboardText}>Event Manager</header>
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

export default Event;
