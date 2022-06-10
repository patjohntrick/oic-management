import React from "react";

const Admin = () => {
  // style
  const style = {
    input:
      "px-3 py-3 text-sm outline-none border-[1px] border-black/40 hover:border-black/60 focus:border-black/60 rounded w-full capitalize",
    form: "space-y-4",
    container: "absolute z-20 bg-red-400",
  };
  return (
    <div className={style.container}>
      <div className="img-container">
        <img src="" alt="" />
      </div>
      <header>
        <p>Admin</p>
      </header>
      <form action="">
        <input
          type="password"
          required
          placeholder="1234 is the password"
          className={style.input}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Admin;
