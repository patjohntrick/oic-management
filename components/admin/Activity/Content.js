import React, { useState } from "react";
import FirstSection from "./FirstSection";
import Header from "./Header";
import ActivityTable from "./Table/ActivityTable";

const Content = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(search);
  };
  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <ActivityTable />
      {/* <FirstSection search={search} /> */}
    </div>
  );
};

export default Content;
