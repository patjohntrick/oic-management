import React, { useContext, useState } from "react";
import { BaseUri } from "../../../context/UserContext";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/router";
import { ministries } from "../../../ministries/ministriesData";

const EditModal = ({ handleEditUser, data }) => {
  const baseUri = useContext(BaseUri);
  const router = useRouter();

  const [name, setName] = useState(data.name);
  const [gender, setGender] = useState(data.gender);
  const [number, setNumber] = useState(data.number);
  const [residence, setResidence] = useState(data.residence);
  const [birthday, setBirthday] = useState(data.birthday);
  const [email, setEmail] = useState(data.email);
  const [ministry, setMinistry] = useState(data.ministry);
  const [password, setPassword] = useState();

  const style = {
    section:
      "absolute top-0 left-0 bg-black/80 p-2 text-heading  z-10 w-full h-full",
    nav: "flex justify-between items-center mb-4",
    navClose: "cursor-pointer text-purple-900",
    container: " mb-4",
    headerText: "font-medium text-xl mb-2",
    modalContainer:
      "modalContainer bg-white rounded w-[600px] py-2 px-4 border-t-2 border-purple-800 absolute top-[80px] left-[50%] translate-x-[-50%]",
    input:
      "px-3 py-3 text-sm outline-none border-[1px] border-black/40 hover:border-black/60 focus:border-black/60 rounded mt-1 w-full capitalize",
    form: "space-y-4",
    label: "font-medium text-md",
    labelSpan: "text-purple-700",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editData = {
      name,
      gender,
      residence,
      birthday,
      email,
      ministry,
      number,
    };

    const res = await axios.put(`${baseUri}/user/edit/${data._id}`, editData);
    const resData = await res.data;
    router.push("/admin/information");
    // console.log(resData);
  };

  return (
    <section className={style.section}>
      <div className={style.modalContainer}>
        <nav className={style.nav}>
          <div className="module capitalize">
            <span className="font-medium">Information</span> | Edit -{" "}
            {data.name}
          </div>
          <div className={style.navClose} onClick={handleEditUser}>
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
                  {ministries.map((data, index) => {
                    return (
                      <option value={data.ministry} key={index}>
                        {data.ministry}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* temporary disabled */}
            {/* <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="email" className={style.label}>
                  Email <span className={style.labelSpan}>*</span>
                </label>
              
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
                  // required
                  className={style.input}
                />
              </div>
            </div> */}

            <div className="grid place-items-center">
              <button
                type="submit"
                className="px-3 py-3 bg-purple-700 rounded text-white shadow-md hover:bg-purple-800 text-sm w-[120px] "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditModal;
