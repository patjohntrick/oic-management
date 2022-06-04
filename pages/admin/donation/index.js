import React, { useContext, useEffect, useState } from "react";
import Content from "../../../components/admin/Givings/Content";
import Navigation from "../../../components/admin/Navigation";
import Sidebar from "../../../components/admin/Sidebar";
import { UserContext, BaseUri } from "../../../context/UserContext";

// URI

// export const getStaticProps = async () => {
//   const baseUri = useContext(BaseUri);
//   console.log(baseUri);
//   const [res1, res2, res3] = await Promise.all([
//     fetch(`${baseUri}/user`),
//     fetch(`${baseUri}/donation/money`),
//     fetch(`${baseUri}/donation/other`),
//   ]);

//   const userData = await res1.json();
//   const donationData = await res2.json();
//   const otherData = await res3.json();

//   return {
//     props: {
//       users: userData,
//       moneyDonations: donationData,
//       otherDonations: otherData,
//     },
//   };
// };

const Donation = () => {
  // State
  const [user, setUser] = useState([]);
  const [moneyDonation, setMoneyDonation] = useState([]);
  const [otherDonation, setOtherDonation] = useState([]);

  const style = {
    body: "h-screen relative",
    aside: "fixed w-[20%] z-20",
    header: "fixed w-[80%] ml-[20%] z-20",
    cardContainer:
      "absolute top-[10vh] left-[20%] w-[80%] px-6 py-4 bg-purple-100 min-h-[90vh]",
    cardWrapper: "flex",
    dashboardText: " text-2xl text-[#444a53] font-medium mb-2",
  };

  // URI
  const baseUri = useContext(BaseUri);

  // fetching data
  const fetchData = async () => {
    const [res1, res2, res3] = await Promise.all([
      fetch(`${baseUri}/user`),
      fetch(`${baseUri}/donation/money`),
      fetch(`${baseUri}/donation/other`),
    ]);

    const userData = await res1.json();
    const donationData = await res2.json();
    const otherData = await res3.json();

    setUser(userData);
    setMoneyDonation(donationData);
    setOtherDonation(otherData);

    // console.log(user);
    // console.log(moneyDonation);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={style.body}>
      {/* <header className={style.header}>
        <Navigation />
      </header>
      
      <aside className={style.aside}>
        <Sidebar />
      </aside> */}
      {/* content */}
      <div className={`${style.cardContainer} container`}>
        <header className={style.dashboardText}>Givings/Tithes</header>
        <div>
          <UserContext.Provider value={{ user, moneyDonation }}>
            <Content />
          </UserContext.Provider>
        </div>
      </div>
    </section>
  );
};

export default Donation;
