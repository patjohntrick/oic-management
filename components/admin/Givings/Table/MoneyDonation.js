import React, { useContext } from "react";
import { BaseUri, UserContext } from "../../../../context/UserContext";

const MoneyDonation = () => {
  // donation data
  const { moneyDonation } = useContext(UserContext);
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
        <p>amount</p>
        <p>date</p>
      </header>
      {moneyDonation
        .map((donation) => {
          return (
            <React.Fragment key={donation._id}>
              <div className={style.tableContent}>
                <p>{donation.name}</p>
                <p>{donation.number}</p>
                <p>{donation.residence}</p>
                <p>{`P${donation.amount}.00`}</p>
                <p>{`${donation.createdAt.slice(3, 14)}`}</p>
              </div>
              <hr />
            </React.Fragment>
          );
        })
        .reverse()}
    </>
  );
};

export default MoneyDonation;
