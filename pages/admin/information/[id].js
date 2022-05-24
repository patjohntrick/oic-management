import axios from "axios";
import React from "react";
import Navigation from "../../../components/admin/Navigation";
import Sidebar from "../../../components/admin/Sidebar";
import { UserContext } from "../../../context/UserContext";
import UserId from "./UserId";

const baseUri = "http://localhost:5000";
export const getStaticPaths = async () => {
  const res = await axios.get(`${baseUri}/user`);
  const data = await res.data;

  const paths = data.map((data) => {
    return {
      params: { id: data._id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (req) => {
  const id = req.params.id;
  const res = await axios.get(`${baseUri}/user/${id}`);
  const data = await res.data;

  return {
    props: { data },
  };
};

const Id = ({ data }) => {
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
        <UserContext.Provider value={data}>
          <UserId />
        </UserContext.Provider>
        {/* <section>
          <UserContext.Provider>
            <Content />
          </UserContext.Provider>
        </section> */}
        {/* <div className="">
          <Header />  
        </div>
        <div className="">
          <FirstSection users={users} />
        </div> */}
      </div>
    </section>
  );
};

export default Id;
