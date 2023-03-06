import React, { useEffect } from 'react';
import Content from '../../../components/admin/Givings/Content';
import { UserContext } from '../../../context/UserContext';
import { useRouter } from 'next/router';

// URI
const baseUri = 'https://oic-backend-production.up.railway.app';
export const getServerSideProps = async () => {
  const [res1, res2, res3] = await Promise.all([
    fetch(`${baseUri}/user`),
    fetch(`${baseUri}/donation/money`),
    fetch(`${baseUri}/donation/other`),
  ]);

  const userData = await res1.json();
  const donationData = await res2.json();
  const otherData = await res3.json();

  return {
    props: {
      user: userData,
      moneyDonations: donationData,
      otherDonations: otherData,
    },
  };
};

const Donation = ({ user, moneyDonations, otherDonations }) => {
  const style = {
    body: 'h-screen relative',
    aside: 'fixed w-[20%] z-20',
    header: 'fixed w-[80%] ml-[20%] z-20',
    cardContainer:
      'absolute top-[10vh] left-[20%] w-[80%] px-6 py-4 bg-purple-100 min-h-[90vh]',
    cardWrapper: 'flex',
    dashboardText: ' text-2xl text-[#444a53] font-medium mb-2',
  };

  // router
  const router = useRouter();

  // localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
    }
  }, []);

  return (
    <section className={style.body}>
      <div className={`${style.cardContainer} container`}>
        <header className={style.dashboardText}>Givings/Tithes</header>
        <div>
          <UserContext.Provider
            value={{ user, moneyDonations, otherDonations }}
          >
            <Content />
          </UserContext.Provider>
        </div>
      </div>
    </section>
  );
};

export default Donation;
