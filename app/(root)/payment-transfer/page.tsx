import HeaderBox from "@/components/HeaderBox";
import PaymentTransferForm from "@/components/paymentTransferForm";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const page = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });
  if (!accounts) return;
  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Transfer Funds"
        subtext="please provide any specific details or notes related to the payment transfer."
      />
    </section>
  );
};

export default page;
