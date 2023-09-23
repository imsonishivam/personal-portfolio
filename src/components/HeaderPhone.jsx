import React from "react";
import { NavContent } from "./Header";

const HeaderPhone = ({ menuOpen, setMenuopen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuopen={setMenuopen} />
    </div>
  );
};

export default HeaderPhone;
