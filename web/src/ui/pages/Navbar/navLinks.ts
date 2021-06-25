import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineCompass,
  AiFillCompass,
  AiOutlineUser,
} from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";

export const navLinks = [
  {
    href: "/home",
    icon: AiOutlineHome,
    filledIcon: AiFillHome,
  },
  {
    href: "/explore",
    icon: AiOutlineCompass,
    filledIcon: AiFillCompass,
  },
  {
    href: "/profile",
    icon: AiOutlineUser,
    filledIcon: BsFillPersonPlusFill,
  },
];
