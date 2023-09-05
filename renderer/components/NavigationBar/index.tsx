import React, { useEffect, useState } from "react";
import NavItem from "../NavItem";
import { NavigationBarType } from "./type";
import { AiFillGithub, AiOutlineHome } from "react-icons/ai";
import Link from "next/link";
import Button from "../Button";
import { useTheme } from "next-themes";

const NavigationBar = ({ navList, isWhite }: NavigationBarType<string>) => {
  const NavItemClass = isWhite ? "nav-btn-white" : "nav-btn";
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log("tt", theme);
  const onClick = () => {
    let newTheme = theme === "dark" ? "light" : "dark";
    console.log(newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="flex justify-between items-center px-6">
      <Button className="nav-btn-white" type="button">
        <Link href="/home">
          <AiOutlineHome size={24} />
        </Link>
      </Button>

      <ul className="flex justify-center gap-6 h-16 w-fit items-center">
        {navList.map((nav, idx) => {
          return <NavItem key={idx} content={nav} className={NavItemClass} />;
        })}
      </ul>
      <div className="flex gap-3 items-center">
        <Button className="nav-btn-white p-3" type="button">
          <Link href={"https://github.com/imfreeman1"} target="_blank">
            <AiFillGithub size={24} />
          </Link>
        </Button>
        <select
          value={theme}
          className="bg-gray-700 text-white p-1 rounded-md"
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <button type="button" onClick={(e) => onClick(e)}>
          확인용
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
