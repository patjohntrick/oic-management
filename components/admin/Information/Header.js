import React from "react";

const Header = () => {
  // style
  const style = {
    container: "flex item-center justify-between mb-2 ",
    inputSearch:
      "py-3 px-4 outline-none border-[1px] border-black/40 hover:border-black/60  text-sm w-[250px] focus:border-black/60 rounded",
    user: "flex items-center w-auto w-[70px] justify-between",
    btnContainer: "grid place-items-center",
    btn: "px-4 h-full text-white bg-green-800 rounded shadow-lg hover:bg-green-900 text-sm",
  };
  return (
    <section className={style.container}>
      <form action="">
        <input
          type="search"
          placeholder="Search..."
          className={style.inputSearch}
        />
      </form>
      <div className={style.btnContainer}>
        <button className={style.btn}>Add Member</button>
      </div>
    </section>
  );
};

export default Header;
