import React, { useContext, useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { BsCalendarEventFill } from "react-icons/bs";
import { GiFlowerEmblem } from "react-icons/gi";
import { BaseUri, UserContext } from "../../../context/UserContext";

// Total Member
const TotalMember = () => {
  // local state
  const [totalMember, setTotalMember] = useState();

  const baseUri = useContext(BaseUri);
  const fetchMembers = async () => {
    const response = await fetch(`${baseUri}/user`);
    const data = await response.json();
    setTotalMember(data.length);
  };
  useEffect(() => {
    fetchMembers();
  });
  // const dashboadUserList = useContext(UserContext);
  // const userCount = dashboadUserList.map((user) => user._id);
  // // console.log(userCount);
  // return <p>{userCount.length}</p>;
  return <p>{totalMember}</p>;
};
// total giving
const TotalGivings = () => {
  const baseUri = useContext(BaseUri);
  // local state
  const [totalGivings, setTotalGivings] = useState();

  const fetchGivings = async () => {
    const response = await fetch(`${baseUri}/donation/money`);
    const data = await response.json();
    const totalData = data.map((data) => data.amount).reduce((a, b) => a + b);
    setTotalGivings(totalData);
  };
  useEffect(() => {
    fetchGivings();
  }, []);
  return `₱${totalGivings}.00`;
};
// total offering
const TotalOfferings = () => {
  const baseUri = useContext(BaseUri);
  // local state
  const [totalOffering, setTotalOffering] = useState();

  const fetchOfferings = async () => {
    const response = await fetch(`${baseUri}/donation/other`);
    const data = await response.json();

    setTotalOffering(data.length);
  };
  useEffect(() => {
    fetchOfferings();
  }, []);
  return `${totalOffering}`;
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
          <p className={style.totalUser}>
            <TotalGivings />
          </p>
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
          <p className={style.totalUser}>
            <TotalOfferings />
          </p>
          <p className={style.totalName}>Other Offerings</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
