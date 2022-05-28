import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import Link from "next/link";

const UserId = () => {
  const data = useContext(UserContext);
  // Style
  const style = {
    title: "text-xl font-medium text-heading",
    infoContainer: "bg-white p-4 rounded shadow-md space-y-6 ",
    headerText: " text-heading font-medium text-xl ",
    imgContainer: "grid place-items-center",
    img: "w-[150px] h-[150px] object-cover rounded-full ",
    textContainer: "grid grid-cols-3",
    spanTitle: "font-medium text-heading capitalize text-base",
    pInfo: "text-heading mb-2 capitalize text-sm",
    btnContainer: " grid place-items-center ",
    editBtn:
      " rounded bg-green-700 hover:bg-green-800 transition-all px-6 uppercase py-3 shadow-md text-white font-medium cursor-pointer ",
    backBtn:
      " rounded bg-red-700 hover:bg-red-800 transition-all px-6 uppercase py-3 shadow-md text-white font-medium cursor-pointer ",
    header: " flex justify-between items-center ",
  };
  return (
    <div className="container">
      <div className={style.infoContainer}>
        <header className={style.header}>
          <div className={style.btnContainer}>
            <Link href="/admin/information">
              <a className={style.backBtn}>back</a>
            </Link>
          </div>
          <div className={style.btnContainer}>
            <a className={style.editBtn}>Edit</a>
          </div>
        </header>
        <div className={style.imgContainer}>
          <img
            src={`https://avatars.dicebear.com/api/adventurer-neutral/${data.name}.svg`}
            alt=""
            className={style.img}
          />
        </div>
        <div className="informationCotainer">
          <div className="first-container">
            <header className="text-heading text-xl font-semibold mb-2">
              Personal Information
            </header>
          </div>

          <div className={style.textContainer}>
            <div className="first-row">
              <p className={style.pInfo}>
                <span className={style.spanTitle}>
                  ID <br />{" "}
                </span>
                {data._id}
              </p>
              <p className={style.pInfo}>
                <span className={style.spanTitle}>
                  Name <br />
                </span>
                {data.name}
              </p>
              <p className={style.pInfo}>
                <span className={style.spanTitle}>
                  Gender <br />
                </span>
                {data.gender}
              </p>
              <p className={style.pInfo}>
                <span className={style.spanTitle}>
                  Residence <br />
                </span>
                {data.residence}
              </p>
            </div>
            <div className="second-row">
              <p className={style.pInfo}>
                <span className={style.spanTitle}>
                  Birthday <br />
                </span>
                {data.birthday}
              </p>
              <p className={style.pInfo}>
                <span className={style.spanTitle}>
                  Ministry <br />
                </span>
                {data.ministry}
              </p>
              <p className={style.pInfo}>
                <span className={style.spanTitle}>
                  Mobile no. <br />
                </span>
                {data.number}
              </p>
            </div>
            <div className="second-row">
              <p className={style.pInfo}>
                <span className={style.spanTitle}>
                  Birthday <br />
                </span>
                {data.birthday}
              </p>
              <p className={style.pInfo}>
                <span className={style.spanTitle}>
                  Ministry <br />
                </span>
                {data.ministry}
              </p>
              <p className={style.pInfo}>
                <span className={style.spanTitle}>
                  Mobile no. <br />
                </span>
                {data.number}
              </p>
            </div>
          </div>
        </div>
        <div className="donation grid grid-cols-2">
          <div className="first-container border-r-[1px] border-black/60 w-[90%]">
            <header className="text-heading text-xl font-semibold mb-2">
              Donations
            </header>
            <div className="dontaion-container">
              <div className="donation">
                <header className="grid grid-cols-2 font-medium text-heading">
                  <p>Amount</p>
                  <p>Date</p>
                </header>
                <div className="grid grid-cols-2 mb-2 text-heading text-sm">
                  <p>P400.00</p>
                  <p>{data.birthday}</p>
                </div>
              </div>
              <div className="total-donation">
                <p className=" text-heading">
                  <span className="font-medium">Total: </span>P435.00
                </p>
              </div>
            </div>
          </div>
          <div className="first-containwer">
            <header className="text-heading text-xl font-semibold mb-2">
              Other Offerings
            </header>
            <div className="dontaion-container">
              <div className="donation">
                <header className="grid grid-cols-2 font-medium text-heading">
                  <p>Offer</p>
                  <p>Date</p>
                </header>
                <div className="grid grid-cols-2 mb-2 text-heading text-sm">
                  <p>fruits</p>
                  <p>{data.birthday}</p>
                </div>
              </div>
              <div className="total-donation">
                <p className=" text-heading">
                  <span className="font-medium">Total givings: </span>1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserId;
