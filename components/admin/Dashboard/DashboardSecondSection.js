import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const DashboardSecondSection = () => {
  const dashboardUserList = useContext(UserContext);
  // style
  const style = {
    container: " mt-4",
    headerTitle: "text-lg text-[#444a53] font-medium mb-2",
    contentContainer: " rounded bg-white shadow",
    tableHeader:
      "grid grid-cols-7 capitalize text-heading font-medium bg-purple-50 p-4 rounded",
    tableContent:
      "grid grid-cols-7 capitalize text-heading text-sm px-4 py-5 border-t-0 border-x-0 border-[1px] border-b-black/10",
  };
  return (
    <section className={style.container}>
      <div className="recent-user">
        <header className={style.headerTitle}>Recent user</header>
        <div className={`container ${style.contentContainer}`}>
          <header className={style.tableHeader}>
            <p>Id</p>
            <p>Name</p>
            <p>Gender</p>
            <p>residence</p>
            <p>birthday</p>
            <p>ministry</p>
            <p>mobile no.</p>
          </header>

          {dashboardUserList.map((user) => {
            return (
              <div className={style.tableContent} key={user._id}>
                <p className=" normal-case ">{`${user._id.slice(0, 10)}...`}</p>
                <p>{`${user.name.slice(0, 10)}...`}</p>
                <p>{user.gender}</p>
                <p> {user.residence}</p>
                <p>{user.birthday}</p>
                <p>{user.ministry}</p>
                <p>{user.number}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DashboardSecondSection;
