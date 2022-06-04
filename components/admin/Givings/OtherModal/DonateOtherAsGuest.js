import React, { useState, useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { UserContext } from "../../../../context/UserContext";
// import { BaseUri } from "../../../context/BaseUri";
// import { UserContext } from "../../../context/UserContext";

const DonateOtherAsGuest = ({ handleOtherOfferingsModal }) => {
  // const baseUri = useContext(BaseUri);
  const router = useRouter();
  const { user } = useContext(UserContext);

  const userSorted = user.sort((a, b) => (a.name > b.name ? 1 : -1));
  // console.log(userSorted);
  // console.log(userList);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [residence, setResidence] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [ministry, setMinistry] = useState("");
  const [password, setPassword] = useState("");
  const [amount, setAmount] = useState("");

  const [emailError, setEmailError] = useState({
    message: "",
    status: false,
  });
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

  return (
    <div className={style.modalContainer}>
      <nav className={style.nav}>
        <div className="module capitalize">
          <span className="font-medium">Givings/Tithes</span> | Donate
        </div>
        <div className={style.navClose} onClick={handleOtherOfferingsModal}>
          <AiOutlineClose />
        </div>
      </nav>
      <div className={style.container}>
        <form action="" className={style.form}>
          <div>
            <label htmlFor="name">
              Name <span className={style.labelSpan}>{`(optional)`}</span>
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                name="name"
                id="name"
                required
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
              required
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
              required
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
              className={style.input}
            />
          </div>
          <div>
            <label htmlFor="amount">
              Offer <span className="text-sm text-purple-800">*</span>
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={`${style.input}`}
              />
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

export default DonateOtherAsGuest;
