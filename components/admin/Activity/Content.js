import React, { useState } from "react";
import FirstSection from "./FirstSection";
import Header from "./Header";
import ActivityTable from "./Table/ActivityTable";
import OccuredActivity from "./Table/OccuredActivity";

const Content = () => {
  const [activitySelector, setActivitySelector] = useState(true);
  // activity selector event
  const handleActivitySelectorToTrue = () => {
    setActivitySelector(true);
  };
  const handleActivitySelectorToFalse = () => {
    setActivitySelector(false);
  };
  return (
    <div>
      <Header
        activitySelector={activitySelector}
        handleActivitySelectorToTrue={handleActivitySelectorToTrue}
        handleActivitySelectorToFalse={handleActivitySelectorToFalse}
      />
      {activitySelector ? <ActivityTable /> : <OccuredActivity />}

      {/* <FirstSection search={search} /> */}
    </div>
  );
};

export default Content;
