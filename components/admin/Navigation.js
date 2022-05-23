import React from "react";
import { MdNotificationsNone } from "react-icons/md";

const Navigation = () => {
  // style
  const style = {
    container:
      "bg-white flex item-center justify-between px-6 border-b-2 border-purple-800 h-[10vh]",
    inputSearch:
      "py-3 px-4 outline-none border-[1px] border-black/40 hover:border-black/60 rounded text-sm w-[250px] focus:border-black/60",
    user: "flex items-center w-auto w-[60px] justify-between",
    logo: "font-semibold text-heading text-xl",
  };
  return (
    <div className={style.container}>
      <div className="form-container grid place-items-center">
        <div className="logo-container">
          <p className={style.logo}>One In Christ Church Inc.</p>
        </div>
        {/* <form action="">
          <input
            type="search"
            placeholder="Advanced search..."
            className={style.inputSearch}
          />
        </form> */}
      </div>
      <div className={style.user}>
        <div className="icon text-xl">
          <MdNotificationsNone />
        </div>
        <div className="user-container">
          <img
            src="https://avatars.dicebear.com/api/avataaars/admin.svg"
            alt=""
            className=" w-[30px] h-[30px] object-cover rounded-full bg-black/10 "
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
