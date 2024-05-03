import React from "react";

const HeaderBox = ({
  type = "title",
  subtext,
  user,
  title,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp;{user}</span>
        )}
      </h1>
    </div>
  );
};

export default HeaderBox;
