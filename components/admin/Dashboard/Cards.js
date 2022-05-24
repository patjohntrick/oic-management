import React, { useContext } from "react";
import { FaUsers } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { BsCalendarEventFill } from "react-icons/bs";
import { GiFlowerEmblem } from "react-icons/gi";
import { UserContext } from "../../../context/UserContext";

// Total Member
const TotalMember = () => {
  const dashboadUserList = useContext(UserContext);
  const userCount = dashboadUserList.map((user) => user._id);
  // console.log(userCount);
  return <p>{userCount.length}</p>;
};

const Cards = () => {
  // style
  const style = {
    boxContainer: "grid grid-cols-4 gap-6",
    box: "px-5 py-5 rounded bg-white shadow flex gap-2 item-center hover:shadow-md transition-all",
    totalUser: " text-lg font-semibold text-[#444a53] ",
    totalName: " text-sm font-medium text-black/60 ",
    dashboardIcon:
      "img-container flex items-center text-2xl text-white rounded-full px-3 ",
  };
  return (
    <div className={style.boxContainer}>
      <div className={style.box}>
        <div className={`${style.dashboardIcon} bg-indigo-600`}>
          <FaUsers />
        </div>
        <div className="text-container">
          <div className={style.totalUser}>
            <TotalMember />
          </div>
          <div className={style.totalName}>Total Members</div>
        </div>
      </div>

      <div className={style.box}>
        <div className={`${style.dashboardIcon} bg-rose-600`}>
          <BiDonateHeart />
        </div>
        <div className="text-container">
          <p className={style.totalUser}>2626.00</p>
          <p className={style.totalName}>Total Donations</p>
        </div>
      </div>

      <div className={style.box}>
        <div className={`${style.dashboardIcon} bg-green-600`}>
          <BsCalendarEventFill />
        </div>
        <div className="text-container">
          <p className={style.totalUser}>2626</p>
          <p className={style.totalName}>Events</p>
        </div>
      </div>

      <div className={style.box}>
        <div className={`${style.dashboardIcon} bg-orange-600`}>
          <GiFlowerEmblem />
        </div>
        <div className="text-container">
          <p className={style.totalUser}>262626</p>
          <p className={style.totalName}>Other Offerings</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
