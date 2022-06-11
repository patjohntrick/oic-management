import React, { useEffect } from "react";
import Content from "../../../components/admin/Information/Content";
import FirstSection from "../../../components/admin/Information/FirstSection";
import Header from "../../../components/admin/Information/Header";
import Navigation from "../../../components/admin/Navigation";
import Sidebar from "../../../components/admin/Sidebar";
import { UserContext } from "../../../context/UserContext";
import { useRouter } from "next/router";

// URI
const baseUri = "https://oic-management.herokuapp.com";

export const getStaticProps = async () => {
  const res = await fetch(`${baseUri}/user`);
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Information = ({ users }) => {
  // console.log(users);
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
      {/* <header className={style.header}>
        <Navigation />
      </header>
     
      <aside className={style.aside}>
        <Sidebar />
      </aside> */}
      {/* content */}
      <div className={`${style.cardContainer} container`}>
        <header className={style.dashboardText}>Information</header>

        <section>
          <UserContext.Provider value={users}>
            <Content />
          </UserContext.Provider>
        </section>
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

export default Information;
