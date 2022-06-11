import { useContext, useEffect, useState } from "react";
import { BaseUri } from "../context/UserContext";
import { useRouter } from "next/router";

export default function Home() {
  // style
  const style = {
    input:
      "px-3 py-3 text-sm outline-none border-[1px] border-black/40 hover:border-black/60 focus:border-black/60 rounded w-full mb-2",
    form: "space-y-4",
    container: "absolute z-20 bg-white backdrop-blur-sm p-4 rounded space-y-2",
    img: "rounded-full w-[300px] bg-[#eee]",
    header: "text-center font-medium text-[#111827] capitalize text-xl",
    btn: "p-3 rounded shadow hover:bg-purple-800 bg-purple-700 text-white font-medium text-sm cursor-pointer capitalize w-[100px]",
  };

  // state
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");

  // router
  const router = useRouter();

  // baseUri
  const baseUri = useContext(BaseUri);
  // console.log(baseUri);

  // get id
  const fetchAdmin = async () => {
    const response = await fetch(`${baseUri}/admin`);
    const data = await response.json();
    setAdmin(data[0]._id);
  };

  // login event
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginAdmin = {
      name: "admins",
      password,
    };
    const response = await fetch(`${baseUri}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginAdmin),
    });
    const data = await response.json();

    if (response.status == 201) {
      localStorage.setItem("token", data.admin);
      router.push("/admin");
    } else {
      alert("Incorrect password");
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);
  // console.log(admin);
  // console.log(password);

  return (
    <div className=" relative z-40 bg-[#111827] h-screen grid place-items-center ">
      <div className={style.container}>
        <div className="img-container w-[60%] m-auto p-1">
          <img
            src="https://avatars.dicebear.com/api/micah/qwer.svg"
            alt=""
            className={style.img}
          />
        </div>
        <header>
          <p className={style.header}>Admin</p>
        </header>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="password"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={`Type "password"`}
            className={style.input}
          />
          <div className="grid place-items-center">
            <button type="submit" className={style.btn}>
              Login
            </button>
          </div>
        </form>
      </div>
      {/* <div className="img-container w-full h-screen absolute z-10">
        <img
          src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/271553364_4843602265708590_4417866767975776352_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nf-b7hQjQ1IAX-z4z1S&_nc_ht=scontent.fmnl13-1.fna&oh=00_AT90sY-tDhaD1aEfPO2FBc7RUa9Tm8KbUTCH8S9hqLvP4A&oe=62A7AC5D"
          alt=""
          className="w-full h-full object-cover"
        />
      </div> */}
    </div>
  );
}
