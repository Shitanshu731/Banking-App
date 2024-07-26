import HeaderBox from "@/components/HeaderBox";
import React from "react";

const TransactionHistory = () => {
  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="see your bank details and transactions."
        />
      </div>
    </div>
  );
};

export default TransactionHistory;
