import React, { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { RiAliensFill } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";

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
  };
  return (
    <section className={style.section}>
      <div className="modalContainer bg-white rounded w-[300px] p-2 border-t-2 border-purple-800">
        <nav className={style.nav}>
          <div className="module">Givings/Tithes</div>
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

const FirstSection = () => {
  const [modal, setModal] = useState(false);

  // Modal
  const handleModal = () => {
    setModal(!modal);
  };
  // style
  const style = {
    container: " mt-4",
    headerTitle: "text-lg text-[#444a53] font-medium mb-2",
    contentContainer: " rounded bg-white shadow",
    tableHeader:
      "grid grid-cols-5 capitalize text-heading font-medium mb-2 bg-purple-50 p-4 rounded",
    tableContent: "grid grid-cols-5 capitalize text-heading text-sm px-4 py-4",
    header: "flex justify-between items-start mb-2",
    headerBtn:
      "px-4 py-2 rounded bg-purple-700 text-white font-medium cursor-pointer hover:bg-purple-800 capitalize flex gap-1 items-center",
  };
  console.log(modal);
  return (
    <>
      {modal ? <Modal handleModal={handleModal} /> : null}
      <section className={style.container}>
        <div className="recent-user">
          <header className={style.header}>
            <header className={style.headerTitle}>Total Givings: 69</header>
            <div className="btn-container">
              <button className={style.headerBtn} onClick={handleModal}>
                <BiDonateHeart />
                donate
              </button>
            </div>
          </header>
          <div className={`container ${style.contentContainer}`}>
            <header className={style.tableHeader}>
              <p>Name</p>
              <p>mobile no.</p>
              <p>residence</p>
              <p>amount</p>
              <p>date</p>
            </header>

            <div className={style.tableContent}>
              <p>John Patrick Resurreccion</p>
              <p>09566723445</p>
              <p>Catanauan</p>
              <p>P100.00</p>
              <p>Mar 01 2000</p>
            </div>
            <hr />

            <div className={style.tableContent}>
              <p>Cristina Go...</p>
              <p>09566723445</p>
              <p>Mulanay</p>
              <p>P450.00</p>
              <p>Aug 31 1999</p>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
