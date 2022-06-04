import React, { useState, useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { UserContext, BaseUri } from "../../../../context/UserContext";
// import { BaseUri } from "../../../context/BaseUri";
// import { UserContext } from "../../../context/UserContext";

const DonateOtherMemberModal = ({ handleMoneyModal }) => {
  // const baseUri = useContext(BaseUri);
  const router = useRouter();
  const { user } = useContext(UserContext);

  // baseUri
  const baseUri = useContext(BaseUri);

  const userSorted = user.sort((a, b) => (a.name > b.name ? 1 : -1));
  // console.log(userSorted);
  // console.log(userList);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [residence, setResidence] = useState("");
  const [amount, setAmount] = useState("");

  const style = {
    section:
      "absolute top-0 left-0 bg-black/80 p-2 text-heading  z-10 w-full h-full",
    nav: "flex justify-between items-center mb-4",
    navClose: "cursor-pointer text-purple-900",
    container: " mb-4",
    headerText: "font-medium text-xl mb-2",
    modalContainer:
      "modalContainer bg-white rounded w-[400px] py-2 px-4 border-t-2 border-purple-800 absolute top-[60px] left-[50%] translate-x-[-50%] z-30",
    input:
      "px-3 py-3 text-sm outline-none border-[1px] border-black/40 hover:border-black/60 focus:border-black/60 rounded w-full capitalize",
    form: "space-y-4",
    label: "font-medium text-md",
    labelSpan: "text-purple-800 text-xs font-medium italic",
    inputContainer: "grid grid-cols-2 gap-2",
  };

  // Submit
  const handleSubmit = async (e) => {
    // e.preventDefault();
    const newDonation = {
      name: name.length > 0 ? name : "unknown",
      amount,
      number: number.length > 0 ? number : "unknown",
      residence: residence.length > 0 ? residence : "unknown",
    };
    const res = await fetch(`${baseUri}/donation/money/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDonation),
    });
    const data = await res.json();
    console.log(res);

    console.log(newDonation);
  };

  return (
    <div className={style.modalContainer}>
      <nav className={style.nav}>
        <div className="module capitalize">
          <span className="font-medium">Givings/Tithes</span> | Donate
        </div>
        <div className={style.navClose} onClick={handleMoneyModal}>
          <AiOutlineClose />
        </div>
      </nav>
      <div className={style.container}>
        <form action="" className={style.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Name <span className={style.labelSpan}>{`(optional)`}</span>
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={style.input}
              />
            </div>
          </div>
          <div>
            <label htmlFor="number">
              Mobile no. <span className={style.labelSpan}>{`(optional)`}</span>
            </label>

            <input
              type="number"
              name="number"
              className={style.input}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="residence">
              Residence <span className={style.labelSpan}>{`(optional)`}</span>
            </label>
            <input
              type="text"
              name="residence"
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
              className={style.input}
            />
          </div>
          <div>
            <label htmlFor="amount">
              Amount <span className="text-sm text-purple-800">*</span>
            </label>
            <div className="relative mt-1">
              <input
                type="number"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={`${style.input} pl-7`}
              />
              <p className="absolute top-[50%] left-[13px] translate-y-[-50%] text-black/70 text-sm">
                ₱
              </p>
              <p className="absolute top-[50%] right-[13px] translate-y-[-50%] text-black/70 text-sm">
                .00
              </p>
            </div>
          </div>

          <div className="grid place-items-center">
            <button
              type="submit"
              className="px-3 py-3 bg-purple-700 rounded text-white shadow-md hover:bg-purple-800 text-sm w-[120px] "
            >
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonateOtherMemberModal;
