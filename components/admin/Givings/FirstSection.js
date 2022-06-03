import React, { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { RiAliensFill, RiCoinsLine } from "react-icons/ri";
import { GiFlowerEmblem } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa";
import MoneyDonation from "./MoneyDonation";
import OtherOfferings from "./OtherOfferings";
import MoneyModal from "./MoneyModal";
import OtherOfferingsModal from "./OtherOfferingsModal";

// modal component

// main component
const FirstSection = () => {
  const [modal, setModal] = useState(false);
  const [typeDonation, setTypeDonation] = useState(false);
  const [subBtn, setSubBtn] = useState(false);
  const [moneyModal, setMoneyModal] = useState(false);
  const [otherOfferingsModal, setOtherOfferingsModal] = useState(false);

  // type of donation
  const handleMoneyDonation = () => {
    setTypeDonation(false);
  };
  const handleOtherOfferings = () => {
    setTypeDonation(true);
  };
  console.log(typeDonation);

  // subBtn
  const handleSubBtn = () => {
    setSubBtn(!subBtn);
  };

  // type of donations modal
  const handleMoneyModal = () => {
    setMoneyModal(!moneyModal);
    setSubBtn(false);
  };
  const handleOtherOfferingsModal = () => {
    setOtherOfferingsModal(!otherOfferingsModal);
    setSubBtn(false);
  };

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
    headerBtn: `px-4 py-3 rounded bg-purple-700 text-white font-medium cursor-pointer hover:bg-purple-800 capitalize flex gap-1 items-center text-sm mb-2 ${
      subBtn ? "shadow-none" : "shadow-md"
    }`,
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
      {moneyModal ? <MoneyModal handleMoneyModal={handleMoneyModal} /> : null}
      {otherOfferingsModal ? (
        <OtherOfferingsModal
          handleOtherOfferingsModal={handleOtherOfferingsModal}
        />
      ) : null}
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
            <div className="btn-container relative">
              <button className={style.headerBtn} onClick={handleSubBtn}>
                <BiDonateHeart />
                donate
              </button>
              <div
                className={`${
                  subBtn ? "block" : "hidden"
                }  absolute bg-purple-700 rounded shadow-lg p-2 space-y-2 capitalize font-medium text-sm w-full text-white`}
              >
                <div className="w-[20px] h-[20px] bg-purple-700 mb-4 rotate-45 -mt-2 absolute left-[80%] translate-x-[-80%] "></div>
                <p
                  className="cursor-pointer hover:text-red-400 flex gap-1 items-center"
                  onClick={handleMoneyModal}
                >
                  <RiCoinsLine />
                  money
                </p>
                <p
                  className=" cursor-pointer hover:text-orange-400 flex gap-1 items-center"
                  onClick={handleOtherOfferingsModal}
                >
                  <GiFlowerEmblem />
                  other
                </p>
              </div>
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
