"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5l font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">
              {user.firstName} {user.lastName}{" "}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="w-full flex justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link className="flex gap-2" href="/">
            <Image src={"/icons/plus.svg"} alt="plus" width={20} height={20} />
            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>
        {banks?.length > 0 && (
          <div className="relative flex flex-col justify-center gap-5 flex-1 items-center">
            <div className="relative z-10">Bank Card 1</div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                BANK CARD 2
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;
