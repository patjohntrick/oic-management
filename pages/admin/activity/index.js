import React, { createContext, useEffect, useState } from "react";
import Content from "../../../components/admin/Activity/Content";
import { useRouter } from "next/router";

// baseUri
const baseUri = "https://oic-management.herokuapp.com";

export const getStaticProps = async () => {
  const response = await fetch(`${baseUri}/activity`);
  const data = await response.json();

  return {
    props: { activityList: data },
  };
};

// local context
export const EventApi = createContext();

const Event = ({ activityList }) => {
  const style = {
    body: "h-screen relative",
    aside: "fixed w-[20%] z-20",
    header: "fixed w-[80%] ml-[20%] z-20",
    cardContainer:
      "absolute top-[10vh] left-[20%] w-[80%] px-6 py-4 bg-purple-100 h-[90vh]",
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
        <header className={style.dashboardText}>Activities</header>
        <EventApi.Provider value={{ activityList }}>
          <div className="">
            <Content />
          </div>
        </EventApi.Provider>
      </div>
    </section>
  );
};

export default Event;
