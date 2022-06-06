import React, { useContext, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

import { BaseUri } from "../../../context/UserContext";

// main component
const Header = ({ search, setSearch, handleSearch }) => {
  const [modal, setModal] = useState(false);
  // Modal
  const handleModal = () => {
    setModal(!modal);
  };
  // style
  const style = {
    container: "flex item-center justify-between mb-2 ",
    inputSearch:
      "py-3 px-4 outline-none border-[1px] border-black/40 hover:border-black/60  text-sm w-[350px] focus:border-black/60 rounded",
    user: "flex items-center w-auto w-[70px] justify-between",
    btnContainer: "grid place-items-center",
    btn: "px-4 h-full text-white bg-green-800 rounded shadow-lg hover:bg-green-900 text-sm",
  };

  return (
    <>
      {modal ? <Modal handleModal={handleModal} /> : null}
      <section className={style.container}>
        <form action="" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={style.inputSearch}
          />
        </form>
        <div className={style.btnContainer}>
          <button className={style.btn} onClick={handleModal}>
            Add Activity
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
