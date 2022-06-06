import React, { useContext } from "react";
import { EventApi } from "../../../../pages/admin/activity/index";
import { AiOutlineCheck, AiFillEdit, AiFillDelete } from "react-icons/ai";

const ActivityTable = () => {
  //   local context
  const { activityList } = useContext(EventApi);
  //   console.log(activityList);

  const style = {
    tableHeader:
      "grid grid-cols-5 capitalize text-heading font-medium bg-purple-50 p-4 rounded",
    tableContent:
      "grid grid-cols-5 capitalize text-heading text-sm px-4 py-4 bg-white ",
  };
  return (
    <>
      <header className={style.tableHeader}>
        <p>Title</p>
        <p>Description</p>
        <p>Time</p>
        <p>Date</p>
        <p>Action</p>
      </header>
      {activityList
        .map((data) => {
          return (
            <React.Fragment key={data._id}>
              <div className={style.tableContent}>
                <p>{data.title}</p>
                <p>{data.description}</p>
                <p>{data.time}</p>
                <p>{data.date}</p>
                <div className="flex gap-2 items-center ">
                  <div className="grid place-items-center rounded-full p-2 bg-purple-50 text-purple-700 hover:bg-purple-100 cursor-pointer">
                    <AiOutlineCheck />
                  </div>
                  <div className="grid place-items-center rounded-full p-2 bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer">
                    <AiFillEdit />
                  </div>
                  <div className="grid place-items-center rounded-full p-2 bg-red-50 text-red-700 hover:bg-red-100 cursor-pointer">
                    <AiFillDelete />
                  </div>
                </div>
              </div>
              <hr />
            </React.Fragment>
          );
        })
        .reverse()}
    </>
  );
};

export default ActivityTable;
