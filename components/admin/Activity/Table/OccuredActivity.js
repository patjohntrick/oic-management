import React, { useContext } from "react";
import { EventApi } from "../../../../pages/admin/activity/index";
import { AiOutlineCheck, AiOutlineRedo, AiFillDelete } from "react-icons/ai";
import { BaseUri } from "../../../../context/UserContext";
import { useRouter } from "next/router";

const OccuredActivity = () => {
  //   local context
  const { activityList } = useContext(EventApi);
  //   console.log(activityList);

  //baseUri
  const baseUri = useContext(BaseUri);

  // router
  const router = useRouter();

  const style = {
    tableHeader:
      "grid grid-cols-6 capitalize text-heading font-medium bg-purple-50 p-4 rounded items-center",
    tableContent:
      "grid grid-cols-6 capitalize text-heading text-sm px-4 py-4 bg-white items-center",
  };

  // delete event
  const handleDelete = async (userId) => {
    const response = await fetch(`${baseUri}/activity/delete/${userId}`, {
      method: "DELETE",
    });
    router.reload();
    console.log(response);
  };

  // done event
  const handleDone = async (userId) => {
    const response = await fetch(`${baseUri}/activity/done/${userId}`);
    router.reload();
    console.log(response);
  };
  return (
    <>
      <header className={style.tableHeader}>
        <p>Title</p>
        <p>Description</p>
        <p>Time</p>
        <p>Date</p>
        <p>
          Expected <br /> Attendees
        </p>
        <p>Action</p>
      </header>
      {activityList
        .map((data) => {
          if (data.done) {
            return (
              <React.Fragment key={data._id}>
                <div className={style.tableContent}>
                  <p>
                    {data.title.length > 15
                      ? `${data.title.slice(0, 15)}...`
                      : data.title}
                  </p>
                  <p>
                    {data.description.length > 15
                      ? `${data.description.slice(0, 15)}...`
                      : data.description}
                  </p>
                  <p>{data.time}</p>
                  <p>{data.date}</p>
                  <p>Music Department</p>
                  <div className="flex gap-2 items-center ">
                    <div
                      className="grid place-items-center rounded-full p-2 bg-purple-50 text-purple-700 hover:bg-purple-100 cursor-pointer"
                      onClick={() => handleDone(data._id)}
                    >
                      <AiOutlineRedo />
                    </div>

                    <div
                      className="grid place-items-center rounded-full p-2 bg-red-50 text-red-700 hover:bg-red-100 cursor-pointer"
                      onClick={() => handleDelete(data._id)}
                    >
                      <AiFillDelete />
                    </div>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            );
          } else {
            return null;
          }
        })
        .reverse()}
    </>
  );
};

export default OccuredActivity;
