import { AiFillHome } from "react-icons/ai";
import { BsHouse, BsPerson, BsPersonFill, BsSearch } from "react-icons/bs";

export const navLinks = [
  {
    text: "Home",
    href: "/home",
    icon: BsHouse,
    filledIcon: AiFillHome,
  },
  {
    text: "Explore",
    href: "/explore",
    icon: BsSearch,
  },
  {
    text: "Profile",
    href: "/profile",
    icon: BsPerson,
    filledIcon: BsPersonFill,
  },
];
