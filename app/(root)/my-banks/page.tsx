import HeaderBox from "@/components/HeaderBox";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Seamlessly manage your banking activities."
        />
      </div>
    </div>
  );
};

export default page;
