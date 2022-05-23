import React, { useEffect } from "react";
import axios from "axios";

const baseUri = "http://localhost:5000";

export const getStaticProps = async () => {
  const response = await fetch(`${baseUri}/user`);
  const data = await response.json();

  return {
    props: { users: data },
  };
};

const FirstSection = ({ users }) => {
  console.log(users);
  const fetchUser = async () => {
    const res = await axios.get(`${baseUri}/user`);
    const data = await res.data;
    console.log(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  // style
  const style = {
    container: " text-heading grid grid-cols-4 gap-4 text-center",
    box: "box bg-white rounded shadow hover:shadow-lg pt-6 pb-5 px-4 w-[250px]",
    imgContainer: "img-container grid place-items-center mb-3",
    img: " w-[100px] h-[100px] object-cover rounded-full ",
    name: " font-semibold  ",
    dept: "text-sm",
    btnContainer: "btn-container mt-2",
    btn: " text-white font-medium bg-purple-800 border-none outline-none px-4 py-2 shadow cursor-pointer rounded hover:bg-purple-900 text-sm ",
  };
  return (
    <section className={style.container}>
      {/* {users.map((user) => {
        return (
          <div className={style.box} key={user._id}>
            <div className={style.imgContainer}>
              <img
                src={`https://avatars.dicebear.com/api/adventurer-neutral/${user.name}.svg`}
                alt=""
                className={style.img}
              />
            </div>
            <div className="text-container">
              <p className={style.name}>{user.name}</p>
              <p className={style.dept}>{user.ministry}</p>
            </div>
            <div className={style.btnContainer}>
              <button className={style.btn}>View Profile</button>
            </div>
          </div>
        );
      })} */}
      <div className={style.box}>
        <div className={style.imgContainer}>
          <img
            src="https://avatars.dicebear.com/api/adventurer-neutral/patrick.svg"
            alt=""
            className={style.img}
          />
        </div>
        <div className="text-container">
          <p className={style.name}>John Patrick Resurreccion</p>
          <p className={style.dept}>Music Ministry</p>
        </div>
        <div className={style.btnContainer}>
          <button className={style.btn}>View Profile</button>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
