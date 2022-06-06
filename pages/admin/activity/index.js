import React, { createContext, useContext, useEffect, useState } from "react";
import Navigation from "../../../components/admin/Navigation";
import Sidebar from "../../../components/admin/Sidebar";
import Content from "../../../components/admin/Activity/Content";
import { BaseUri } from "../../../context/UserContext";

// baseUri
const baseUri = "http://localhost:5000";

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
  // state
  const [eventList, setEventList] = useState([]);
  const style = {
    body: "h-screen relative",
    aside: "fixed w-[20%] z-20",
    header: "fixed w-[80%] ml-[20%] z-20",
    cardContainer:
      "absolute top-[10vh] left-[20%] w-[80%] px-6 py-4 bg-purple-100 h-[90vh]",
    cardWrapper: "flex",
    dashboardText: " text-2xl text-[#444a53] font-medium mb-2",
  };

  // basuUri
  // const baseUri = useContext(BaseUri);

  // fetchList
  // const fetchList = async () => {
  //   const res = await fetch(`${baseUri}/event`);
  //   const data = await res.json();
  //   setEventList(data);
  // };
  // useEffect(() => {
  //   fetchList();
  // }, []);
  return (
    <section className={style.body}>
      {/* <header className={style.header}>
        <Navigation />
      </header>
     
      <aside className={style.aside}>
        <Sidebar />
      </aside> */}

      <div className={`${style.cardContainer} container`}>
        <header className={style.dashboardText}>Activities</header>
        {/* <div className="">
           <Cards />
         </div>
         <div>
           <DashboardSecondSection />
         </div> */}
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
