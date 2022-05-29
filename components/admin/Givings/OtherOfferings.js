import React from "react";

const OtherOfferings = () => {
  const style = {
    tableHeader:
      "grid grid-cols-5 capitalize text-heading font-medium mb-2 bg-purple-50 p-4 rounded",
    tableContent: "grid grid-cols-5 capitalize text-heading text-sm px-4 py-4",
  };
  return (
    <>
      <header className={style.tableHeader}>
        <p>Name</p>
        <p>mobile no.</p>
        <p>residence</p>
        <p>offer</p>
        <p>date</p>
      </header>

      <div className={style.tableContent}>
        <p>John Patrick Resurreccion</p>
        <p>09566723445</p>
        <p>Catanauan</p>
        <p>Fruits</p>
        <p>Mar 01 2000</p>
      </div>
      <hr />

      <div className={style.tableContent}>
        <p>Cristina Go...</p>
        <p>09566723445</p>
        <p>Mulanay</p>
        <p>Rice</p>
        <p>Aug 31 1999</p>
      </div>
      <hr />
    </>
  );
};

export default OtherOfferings;
