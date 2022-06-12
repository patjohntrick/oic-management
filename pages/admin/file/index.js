import React, { useEffect } from "react";
import { useRouter } from "next/router";

const File = () => {
  const style = {
    body: "h-screen relative",
    aside: "fixed w-[20%] z-20",
    header: "fixed w-[80%] ml-[20%] z-20",
    cardContainer:
      "absolute top-[10vh] left-[20%] w-[80%] px-6 py-4 bg-purple-100 h-[90vh]",
    cardWrapper: "flex",
    dashboardText: " text-2xl text-[#444a53] font-medium mb-2",
  };

  // router
  const router = useRouter();

  // localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, []);
  return (
    <section className={style.body}>
      <div className={`${style.cardContainer} container`}>
        <header className={style.dashboardText}>Files</header>
      </div>
    </section>
  );
};

export default File;
