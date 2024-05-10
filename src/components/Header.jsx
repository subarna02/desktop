import React from "react";
import { FaBeer } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { IoWifi } from "react-icons/io5";
import { LiaPowerOffSolid } from "react-icons/lia";

const Header = () => {
  return (
    <header className="bg-black/70 text-white">
      <div className="flex justify-between py-1 px-2">
        <div className="flex gap-4 text-xs">
          <div>
            <LiaPowerOffSolid size={15} />
          </div>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>File</li>
            <li>Selection</li>
            <li>View</li>
          </ul>
        </div>
        <div className="flex gap-3 text-xs">
          <div className="flex gap-2">
            <div>
              <IoWifi size={15} />
            </div>
            <div>
              <BiMenu size={15} />
            </div>
          </div>
          <div className="flex gap-3">
            <div>Fri 10 May</div>
            <div>4:04 PM</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
