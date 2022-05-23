import React from "react";

const DashboardSecondSection = () => {
  // style
  const style = {
    container: " mt-4",
    headerTitle: "text-lg text-[#444a53] font-medium mb-2",
    contentContainer: " rounded bg-white shadow",
    tableHeader:
      "grid grid-cols-7 capitalize text-heading font-medium mb-2 bg-purple-50 p-4 rounded",
    tableContent: "grid grid-cols-7 capitalize text-heading text-sm px-4 py-4",
  };
  return (
    <section className={style.container}>
      <div className="recent-user">
        <header className={style.headerTitle}>Recent user</header>
        <div className={`container ${style.contentContainer}`}>
          <header className={style.tableHeader}>
            <p>Id</p>
            <p>Name</p>
            <p>Gender</p>
            <p>residence</p>
            <p>birthday</p>
            <p>ministry</p>
            <p>mobile no.</p>
          </header>

          <div className={style.tableContent}>
            <p className=" normal-case ">4534442g45d</p>
            <p>John Patrick...</p>
            <p>Male</p>
            <p>Catanauan</p>
            <p>Mar 01 2000</p>
            <p>Music</p>
            <p>09566723445</p>
          </div>
          <hr />

          <div className={style.tableContent}>
            <p className=" normal-case ">453ph42g45d</p>
            <p>Cristina Go...</p>
            <p>Female</p>
            <p>Mulanay</p>
            <p>Sep 31 1999</p>
            <p>Pageant</p>
            <p>09566723445</p>
          </div>
          <hr />

          {/* <div className={style.tableContent}>
            <p className=" normal-case ">453ph42g45d</p>
            <p>Cristina Go...</p>
            <p>Female</p>
            <p>Mulanay</p>
            <p>Sep 31 1999</p>
            <p>Pageant</p>
            <p>09566723445</p>
          </div>
          <hr />

          <div className={style.tableContent}>
            <p className=" normal-case ">453ph42g45d</p>
            <p>Cristina Go...</p>
            <p>Female</p>
            <p>Mulanay</p>
            <p>Sep 31 1999</p>
            <p>Pageant</p>
            <p>09566723445</p>
          </div>
          <hr />

          <div className={style.tableContent}>
            <p className=" normal-case ">453ph42g45d</p>
            <p>Cristina Go...</p>
            <p>Female</p>
            <p>Mulanay</p>
            <p>Sep 31 1999</p>
            <p>Pageant</p>
            <p>09566723445</p>
          </div>
          <hr />

          <div className={style.tableContent}>
            <p className=" normal-case ">453ph42g45d</p>
            <p>Cristina Go...</p>
            <p>Female</p>
            <p>Mulanay</p>
            <p>Sep 31 1999</p>
            <p>Pageant</p>
            <p>09566723445</p>
          </div>
          <hr />

          <div className={style.tableContent}>
            <p className=" normal-case ">4534442g45d</p>
            <p>John Patrick...</p>
            <p>Male</p>
            <p>Catanauan</p>
            <p>March 01 2000</p>
            <p>Music</p>
            <p>09566723445</p>
          </div>
          <hr />

          <div className={style.tableContent}>
            <p className=" normal-case ">4534442g45d</p>
            <p>John Patrick...</p>
            <p>Male</p>
            <p>Catanauan</p>
            <p>Mar 01 2000</p>
            <p>Music</p>
            <p>09566723445</p>
          </div>
          <hr />

          <div className={style.tableContent}>
            <p className=" normal-case ">4534442g45d</p>
            <p>John Patrick...</p>
            <p>Male</p>
            <p>Catanauan</p>
            <p>Mar 01 2000</p>
            <p>Music</p>
            <p>09566723445</p>
          </div>
          <hr /> */}
        </div>
      </div>

      {/* <div className="daily-news">
        <header className={style.headerTitle}>Daily news</header>
        <div className={`container ${style.contentContainer}`}>
          <header>
            <p>sub-title</p>
            <p>title</p>
            <p>credit</p>
          </header>
          <div className="paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              mollitia iusto voluptate autem accusantium sed exercitationem,
              consequuntur beatae reprehenderit vel culpa quis placeat, eos
              nemo, id rerum. Officia, velit dolores.
            </p>
          </div>
          <footer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              vero?
            </p>
          </footer>
        </div>
      </div> */}
    </section>
  );
};

export default DashboardSecondSection;
