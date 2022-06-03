import React, { useContext } from "react";
import Content from "../../../components/admin/Givings/Content";
import Navigation from "../../../components/admin/Navigation";
import Sidebar from "../../../components/admin/Sidebar";
import { UserContext } from "../../../context/UserContext";

// URI
const baseUri = "http://localhost:5000";

export const getStaticProps = async () => {
  const res = await fetch(`${baseUri}/user`);
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Donation = ({ users }) => {
  console.log(users);
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
        <header className={style.dashboardText}>Givings/Tithes</header>
        <div>
          <UserContext.Provider value={users}>
            <Content />
          </UserContext.Provider>
        </div>
      </div>
    </section>
  );
};

export default Donation;
