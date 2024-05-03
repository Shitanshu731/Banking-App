import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Shitanshu" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName}
            subtext="Access and manage your account"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={23}
            totalCurrentBalance={2432}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
