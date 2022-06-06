import React from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { BiDonateHeart } from "react-icons/bi";
// import { SiFiles } from "react-icons/si";
// import { AiFillSliders } from "react-icons/ai";
import { BsFillStickiesFill } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";

const Navigation = () => {
  // Style
  const style = {
    listItem: "hover:bg-white/5",
    list: "",
    anchor: "flex item-center gap-3 pl-[40px] py-4",
    aside: "fixed w-[20%] z-20 bg-nav h-screen",
  };

  return (
    <div className={style.aside}>
      <div>
        <div className="logo-contaier text-logo text-2xl font-semibold mb-4 text-center pt-[30px]">
          <p>OIC</p>
        </div>
        <ul className=" text-gray-400 font-light">
          <li className={style.listItem}>
            <div className={style.list}>
              <Link href="/admin/">
                <a className={style.anchor}>
                  {" "}
                  <span>
                    <MdDashboard />
                  </span>{" "}
                  Dashboard
                </a>
              </Link>
            </div>
          </li>

          <li className={style.listItem}>
            <div className={style.list}>
              <Link href="/admin/information">
                <a className={style.anchor}>
                  {" "}
                  <span>
                    <CgDetailsMore />
                  </span>{" "}
                  Information
                </a>
              </Link>
            </div>
          </li>

          <li className={style.listItem}>
            <div className={style.list}>
              <Link href="/admin/donation">
                <a className={style.anchor}>
                  {" "}
                  <span>
                    <BiDonateHeart />
                  </span>{" "}
                  Givings/Tithes
                </a>
              </Link>
            </div>
          </li>

          <li className={style.listItem}>
            <div className={style.list}>
              <Link href="/admin/activity">
                <a className={style.anchor}>
                  {" "}
                  <span>
                    <FiActivity />
                  </span>{" "}
                  Activities
                </a>
              </Link>
            </div>
          </li>

          <li className={style.listItem}>
            <div className={style.list}>
              <Link href="/admin/file">
                <a className={style.anchor}>
                  {" "}
                  <span>
                    <BsFillStickiesFill />
                  </span>{" "}
                  Files
                </a>
              </Link>
            </div>
          </li>

          {/* <li className={`${style.listItem} cursor-pointer`}>
            <div className={style.list}>
              <a className={style.anchor}>
                {" "}
                <span>
                  <AiFillSliders />
                </span>{" "}
                Features
              </a>
            </div>
            <div className="sub-links hidden">
              <li>
                <Link href="">
                  <a>Attendance</a>
                </Link>
              </li>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
