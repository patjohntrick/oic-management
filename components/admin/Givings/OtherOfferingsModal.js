import React, { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { RiAliensFill } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";

const OtherOfferingsModal = ({ handleOtherOfferingsModal }) => {
  const style = {
    section:
      "absolute top-0 left-0 bg-black/80 p-2 text-heading z-10 w-full h-full",
    nav: "flex justify-between items-center mb-4",
    navClose: "cursor-pointer text-purple-900",
    container: " text-center mb-4",
    headerText: "font-medium text-xl mb-4",
    choices: " grid grid-cols-2 place-items-center w-[90%] mx-auto",
    memberBtn:
      "px-4 py-2 rounded bg-purple-700 text-white font-medium cursor-pointer hover:bg-purple-800 capitalize flex gap-1 items-center",
    guestBtn:
      "px-6 py-2 rounded bg-green-700 text-white font-medium cursor-pointer hover:bg-green-800 capitalize flex gap-1 items-center",
    modalContainer:
      "modalContainer bg-white rounded w-[300px] p-2 border-t-2 border-orange-800 absolute top-[200px] left-[50%] translate-x-[-50%]",
  };
  return (
    <section className={style.section}>
      <div className={style.modalContainer}>
        <nav className={style.nav}>
          <div className="module">Givings/Tithes | Donate</div>
          <div className={style.navClose} onClick={handleOtherOfferingsModal}>
            <AiOutlineClose />
          </div>
        </nav>
        <div className={style.container}>
          <header className={style.headerText}>Donate other offer as:</header>
          <div className={style.choices}>
            <button className={style.memberBtn}>
              <FaUserCheck />
              Member
            </button>

            <button className={style.guestBtn}>
              <RiAliensFill />
              Guest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherOfferingsModal;
