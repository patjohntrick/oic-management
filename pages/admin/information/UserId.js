import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const UserId = () => {
  const data = useContext(UserContext);
  // Style
  const style = {
    title: "text-xl font-medium text-heading",
  };
  return <div className={style.title}>{data.name}</div>;
};

export default UserId;
