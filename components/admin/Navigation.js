import React from "react";
import { MdNotificationsNone } from "react-icons/md";

const Navigation = () => {
  // style
  const style = {
    container:
      "bg-white flex item-center justify-between px-6 border-b-2 border-purple-800 h-[65px]",
    inputSearch:
      "py-3 px-4 outline-none border-[1px] border-black/40 hover:border-black/60 rounded text-sm w-[250px] focus:border-black/60",
    user: "flex items-center w-auto w-[70px] justify-between",
  };
  return (
    <div className={style.container}>
      <div className="form-container grid place-items-center">
        <form action="">
          <input
            type="search"
            placeholder="Search..."
            className={style.inputSearch}
          />
        </form>
      </div>
      <div className={style.user}>
        <div className="icon text-2xl">
          <MdNotificationsNone />
        </div>
        <div className="user-container">
          {/* <img
            src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
            alt=""
          /> */}
          <p className="rounded-full bg-pink-800 text-white py-2 px-4 text-sm ">
            A
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
