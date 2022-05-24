import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import Link from "next/link";

const FirstSection = () => {
  const users = useContext(UserContext);
  console.log(users);
  const style = {
    container: " text-heading grid grid-cols-4 gap-4 text-center",
    box: "box bg-white rounded shadow hover:shadow-lg pt-6 pb-5 px-4 w-[250px]",
    imgContainer: "img-container grid place-items-center mb-3",
    img: " w-[90px] h-[90px] object-cover rounded-full ",
    name: " font-semibold  ",
    dept: "text-sm capitalize",
    btnContainer: "btn-container",
    btn: " text-white font-medium bg-purple-800 border-none outline-none px-4 py-2 shadow cursor-pointer rounded hover:bg-purple-900 text-sm ",
  };
  return (
    <section className={style.container}>
      {users.map((user) => {
        return (
          <div className={style.box} key={user._id}>
            <div className={style.imgContainer}>
              <img
                src={`https://avatars.dicebear.com/api/adventurer-neutral/${user.name}.svg`}
                alt=""
                className={style.img}
              />
            </div>
            <div className="text-container mb-4">
              <p className={style.name}>{user.name}</p>
              <p className={style.dept}>{user.ministry}</p>
            </div>
            <div className={style.btnContainer}>
              <Link href={`/admin/information/${user._id}`}>
                <a className={style.btn}>View Profile</a>
              </Link>
            </div>
          </div>
        );
      })}
      {/* <div className={style.box}>
        <div className={style.imgContainer}>
          <img
            src="https://avatars.dicebear.com/api/adventurer-neutral/patrick.svg"
            alt=""
            className={style.img}
          />
        </div>
        <div className="text-container">
          <p className={style.name}>John Patrick Resurreccion</p>
          <p className={style.dept}>Music Ministry</p>
        </div>
        <div className={style.btnContainer}>
          <button className={style.btn}>View Profile</button>
        </div>
      </div> */}
    </section>
  );
};

export default FirstSection;
