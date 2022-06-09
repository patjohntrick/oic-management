import React, { useContext } from "react";
import { BaseUri, UserContext } from "../../../../context/UserContext";
import { AiFillCheckCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";

const MoneyDonation = () => {
  // donation data
  const { moneyDonations } = useContext(UserContext);
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
      {moneyDonations
        .map((donation) => {
          return (
            <React.Fragment key={donation._id}>
              <div className={style.tableContent}>
                <p>
                  {donation.name.length > 15
                    ? `${donation.name.slice(0, 15)}...`
                    : donation.name}
                </p>
                <p>
                  {donation.number.length > 13
                    ? `${donation.number.slice(0, 13)}...`
                    : donation.number}
                </p>
                <p>
                  {donation.residence.length > 15
                    ? `${donation.residence.slice(0, 15)}...`
                    : donation.residence}
                </p>
                <p>{`P${donation.amount}.00`}</p>
                <p>{`${donation.createdAt.slice(3, 15)}`}</p>
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
