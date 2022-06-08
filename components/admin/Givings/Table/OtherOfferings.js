import React, { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";

const OtherOfferings = () => {
  // donation data
  const { otherDonations } = useContext(UserContext);
  // console.log(otherDonations);

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

      {otherDonations
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
                    : donation.residence}{" "}
                </p>
                <p>{donation.offer}</p>
                <p>{donation.createdAt.slice(3, 15)}</p>
              </div>
              <hr />
            </React.Fragment>
          );
        })
        .reverse()}
    </>
  );
};

export default OtherOfferings;
