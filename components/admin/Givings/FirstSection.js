import React from "react";

const FirstSection = () => {
  // style
  const style = {
    container: " mt-4",
    headerTitle: "text-lg text-[#444a53] font-medium mb-2",
    contentContainer: " rounded bg-white shadow",
    tableHeader:
      "grid grid-cols-5 capitalize text-heading font-medium mb-2 bg-purple-50 p-4 rounded",
    tableContent: "grid grid-cols-5 capitalize text-heading text-sm px-4 py-4",
  };
  return (
    <section className={style.container}>
      <div className="recent-user">
        <header className={style.headerTitle}>Total Givings: 69</header>
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
  );
};

export default FirstSection;
