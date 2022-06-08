import React, { useContext } from "react";
import { FaUsers } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { BsCalendarEventFill } from "react-icons/bs";
import { GiFlowerEmblem } from "react-icons/gi";
import { DashboardContext } from "../../../pages/admin";

// main component
const Cards = () => {
  const { user, money, other, activities } = useContext(DashboardContext);

  // total money donation
  const totalMoney = money.map((data) => data.amount).reduce((a, b) => a + b);

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
          <div className={style.totalUser}>{user.length}</div>
          <div className={style.totalName}>Total Members</div>
        </div>
      </div>

      <div className={style.box}>
        <div className={`${style.dashboardIcon} bg-rose-600`}>
          <BiDonateHeart />
        </div>
        <div className="text-container">
          <p className={style.totalUser}>{`₱${totalMoney}.00`}</p>
          <p className={style.totalName}>Total Donations</p>
        </div>
      </div>

      <div className={style.box}>
        <div className={`${style.dashboardIcon} bg-green-600`}>
          <BsCalendarEventFill />
        </div>
        <div className="text-container">
          <p className={style.totalUser}>{activities.length}</p>
          <p className={style.totalName}>Activities</p>
        </div>
      </div>

      <div className={style.box}>
        <div className={`${style.dashboardIcon} bg-orange-600`}>
          <GiFlowerEmblem />
        </div>
        <div className="text-container">
          <p className={style.totalUser}>{other.length}</p>
          <p className={style.totalName}>Other Offerings</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
