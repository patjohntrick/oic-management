import React, { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { RiAliensFill } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";
import MoneyDonation from "./MoneyDonation";
import OtherOfferings from "./OtherOfferings";

// modal component
const Modal = ({ handleModal }) => {
  const style = {
    section:
      "absolute top-0 left-0 bg-black/80 p-2 text-heading grid place-items-center z-30 w-full h-full",
    nav: "flex justify-between items-center mb-4",
    navClose: "cursor-pointer text-purple-900",
    container: " text-center mb-4",
    headerText: "font-medium text-xl mb-2",
    choices: "space-y-2",
    btnContainer: "grid place-items-center",
    memberBtn:
      "px-4 py-2 rounded bg-purple-700 text-white font-medium cursor-pointer hover:bg-purple-800 capitalize flex gap-1 items-center",
    guestBtn:
      "px-6 py-2 rounded bg-green-700 text-white font-medium cursor-pointer hover:bg-green-800 capitalize flex gap-1 items-center",
    modalContainer:
      "modalContainer bg-white rounded w-[300px] p-2 border-t-2 border-purple-800",
  };
  return (
    <section className={style.section}>
      <div className={style.modalContainer}>
        <nav className={style.nav}>
          <div className="module">Givings/Tithes | Donate</div>
          <div className={style.navClose} onClick={handleModal}>
            <AiOutlineClose />
          </div>
        </nav>
        <div className={style.container}>
          <header className={style.headerText}>Donate as:</header>
          <div className={style.choices}>
            <div className={style.btnContainer}>
              <button className={style.memberBtn}>
                <FaUserCheck />
                Member
              </button>
            </div>
            <div className={style.btnContainer}>
              <button className={style.guestBtn}>
                <RiAliensFill />
                Guest
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// main component
const FirstSection = () => {
  const [modal, setModal] = useState(false);
  const [typeDonation, setTypeDonation] = useState(false);

  // type of donation
  const handleMoneyDonation = () => {
    setTypeDonation(false);
  };
  const handleOtherOfferings = () => {
    setTypeDonation(true);
  };
  console.log(typeDonation);

  // Modal
  const handleModal = () => {
    setModal(!modal);
  };
  // style
  const style = {
    container: " mt-4",
    headerTitle: "text-lg text-[#444a53] flex gap-3 text-sm",
    contentContainer: " rounded bg-white shadow",
    header: "flex justify-between items-center mb-2 ",
    headerBtn:
      "px-4 py-3 rounded bg-purple-700 text-white font-medium cursor-pointer hover:bg-purple-800 capitalize flex gap-1 items-center text-sm shadow-md",
    totalGivings: `${
      typeDonation == false
        ? "bg-rose-700 text-white"
        : " text-rose-700 border-rose-700 hover:bg-rose-700 hover:text-white "
    } cursor-pointer px-4 py-3 transition-all shadow-md rounded font-medium text-sm border-[1px] `,
    totalOfferings: `${
      typeDonation == true
        ? "bg-orange-700 text-white"
        : " text-orange-700 border-orange-700 hover:bg-orange-700 hover:text-white "
    } cursor-pointer px-4 py-3 transition-all shadow-md rounded font-medium text-sm border-[1px] `,
  };
  // console.log(modal);
  return (
    <>
      {modal ? <Modal handleModal={handleModal} /> : null}
      <section className={style.container}>
        <div className="recent-user">
          <header className={style.header}>
            <header className={style.headerTitle}>
              <p className={style.totalGivings} onClick={handleMoneyDonation}>
                Total Givings: 69
              </p>
              <p
                className={style.totalOfferings}
                onClick={handleOtherOfferings}
              >
                Other Offerings : 12
              </p>
            </header>
            <div className="btn-container">
              <button className={style.headerBtn} onClick={handleModal}>
                <BiDonateHeart />
                donate
              </button>
            </div>
          </header>
          <div className={`container ${style.contentContainer}`}>
            {typeDonation == false ? <MoneyDonation /> : <OtherOfferings />}
            {/* <MoneyDonation />
            <OtherOfferings /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
