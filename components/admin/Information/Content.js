import React, { useState } from "react";
import FirstSection from "./FirstSection";
import Header from "./Header";

const Content = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <FirstSection search={search} />
    </div>
  );
};

export default Content;
