import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { useRouter } from "next/router";

const Navigation = () => {
  // style
  const style = {
    container:
      "bg-white flex item-center justify-between px-6 border-b-2 border-purple-800 h-[10vh] fixed w-[80%] ml-[20%] z-20",
    inputSearch:
      "py-3 px-4 outline-none border-[1px] border-black/40 hover:border-black/60 rounded text-sm w-[250px] focus:border-black/60",
    user: "flex items-center w-auto w-[60px] justify-between",
    logo: "font-semibold text-black/80 text-xl",
    header: "fixed w-[80%] ml-[20%] z-20",
  };
  // router
  const router = useRouter();
  // logout
  const logoutEvent = () => {
    window.localStorage.clear();
    router.push("/");
  };
  return (
    <div className={style.container}>
      <div className="form-container grid place-items-center">
        <div className="logo-container">
          <p className={style.logo}>One In Christ Church Inc.</p>
        </div>
      </div>
      <div className={style.user}>
        <div className="icon text-xl">
          <MdNotificationsNone />
        </div>
        <div className="user-container cursor-pointer" onClick={logoutEvent}>
          <img
            src="https://avatars.dicebear.com/api/micah/qwer.svg"
            alt=""
            className=" w-[30px] h-[30px] object-cover rounded-full bg-black/10 "
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
