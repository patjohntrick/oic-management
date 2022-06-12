import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BaseUri } from "../../../context/UserContext";
import { ministries } from "../../../ministries/ministriesData";
import { useRouter } from "next/router";

// modal component
const Modal = ({ handleModal }) => {
  const baseUri = useContext(BaseUri);
  const router = useRouter();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [residence, setResidence] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [ministry, setMinistry] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState({ message: "", status: false });

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMember = {
      name,
      gender,
      number,
      residence,
      birthday,
      email,
      ministry,
      password,
    };

    const res = await fetch(`${baseUri}/user/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMember),
    });
    const data = await res.json();
    if (res.status == 200) {
      router.reload();
      // window.location.reload();
    } else if (res.status == 400) {
      setEmailError({ message: data.message, status: true });
      setEmail("");
    }
  };
  const style = {
    section:
      "absolute top-0 left-0 bg-black/80 p-2 text-heading z-10 w-full h-full",
    nav: "flex justify-between items-center mb-4",
    navClose: "cursor-pointer text-purple-900",
    container: " mb-4",
    headerText: "font-medium text-xl mb-2",
    modalContainer:
      "modalContainer bg-white rounded w-[600px] py-2 px-4 border-t-2 border-purple-800 absolute top-[50px] left-[50%] translate-x-[-50%]",
    input:
      "px-3 py-3 text-sm outline-none border-[1px] border-black/40 hover:border-black/60 focus:border-black/60 rounded mt-1 w-full",
    form: "space-y-4",
    label: "font-medium text-md",
    labelSpan: "text-purple-700",
  };
  // sorted ministries
  const list = ministries
    .map((data) => data.ministry)
    .sort((a, b) => (a > b ? 1 : -1));

  return (
    <section className={style.section}>
      <div className={style.modalContainer}>
        <nav className={style.nav}>
          <div className="module">
            <span className="font-medium">Information</span> | Add Member
          </div>
          <div className={style.navClose} onClick={handleModal}>
            <AiOutlineClose />
          </div>
        </nav>
        <div className={style.container}>
          <form action="" className={style.form} onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="name" className={style.label}>
                  Full Name <span className={style.labelSpan}>*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={style.input}
                />
              </div>
              <div>
                <label htmlFor="gender" className={style.label}>
                  Gender <span className={style.labelSpan}>*</span>
                </label>
                <br />
                <select
                  name="gender"
                  className={style.input}
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="number" className={style.label}>
                  Mobile No. <span className={style.labelSpan}>*</span>
                </label>
                <br />
                <input
                  type="number"
                  name="number"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  className={style.input}
                />
              </div>
              <div>
                <label htmlFor="residence" className={style.label}>
                  Residence <span className={style.labelSpan}>*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="residence"
                  id="residence"
                  value={residence}
                  onChange={(e) => setResidence(e.target.value)}
                  required
                  className={style.input}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="birthday" className={style.label}>
                  Birthday <span className={style.labelSpan}>*</span>
                </label>
                <br />
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                  className={style.input}
                />
              </div>

              <div>
                <label htmlFor="ministry" className={style.label}>
                  Ministry <span className={style.labelSpan}>*</span>
                </label>
                <br />
                <select
                  name="ministry"
                  id="ministry"
                  value={ministry}
                  onChange={(e) => setMinistry(e.target.value)}
                  className={style.input}
                  required
                >
                  <option value="" disabled selected>
                    Select Ministry
                  </option>
                  {list
                    .map((data, index) => {
                      return (
                        <option value={data} key={index}>
                          {data}
                        </option>
                      );
                    })
                    .sort((a, b) => (a.ministry > b.ministry ? 1 : -1))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="email" className={style.label}>
                  Email <span className={style.labelSpan}>*</span>
                </label>
                {/* trigger when email is invalid */}
                <label htmlFor="" className="text-xs ml-2 text-red-800">
                  {emailError.message}
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`${
                    emailError.status
                      ? "px-3 py-3 text-sm outline-none border-[1px] border-red-800 rounded mt-1 w-full"
                      : "px-3 py-3 text-sm outline-none border-[1px] border-black/40 hover:border-black/60 focus:border-black/60 rounded mt-1 w-full"
                  }`}
                />
              </div>
              <div>
                <label htmlFor="password" className={style.label}>
                  Password <span className={style.labelSpan}>*</span>
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={style.input}
                />
              </div>
            </div>

            <div className="grid place-items-center">
              <button
                type="submit"
                className="px-3 py-3 bg-purple-700 rounded text-white shadow-md hover:bg-purple-800 text-sm w-[120px] "
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

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
            Add Member
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
