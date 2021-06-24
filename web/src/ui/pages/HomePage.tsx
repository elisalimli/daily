import Head from "next/head";
import React from "react";
import {
  AiFillCompass,
  AiFillHome,
  AiOutlineCompass,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";

import {
  SCREEN_COLUMNS_TYPE,
  useScreenType,
} from "../../utils/hooks/useScreenType";
import CenteredLoader from "../Loader/CenteredLoader";
import Logo from "../Logo";
import Header from "../Typography/Header";
import Link from "../utilities/Link";
import ProtectedRoute from "../utilities/ProtectedRoute";
import Icon from "../Icon";

const HomePage = () => {
  const screenType = useScreenType();

  if (!screenType) return <CenteredLoader logo />;

  return (
    <ProtectedRoute>
      <Head>
        <title>Home | Daily</title>
      </Head>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "60px 1fr",
          gridGap: 60,
        }}
      >
        <div className="flex flex-col items-center sticky top-0 h-screen border-r-default border-secondary-washed-out p-2">
          <div className="mb-2">
            <Link href="/">
              <Icon>
                <Logo width={25} height={25} />
              </Icon>
            </Link>
          </div>
          <div className="flex flex-col justify-between h-full">
            <nav className="flex flex-col items-center space-y-1">
              {[
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
              ].map(({ icon: IconComponent, href }) => (
                <Link href={href}>
                  <Icon>
                    <IconComponent className="text-2xl" />
                  </Icon>
                </Link>
              ))}
            </nav>
            <div>
              <Icon style={{ width: 45, height: 45 }}>
                <img
                  className="rounded-full"
                  width={30}
                  height={30}
                  src="https://avatars.githubusercontent.com/u/67149699?v=4"
                  alt="profile"
                />
              </Icon>
            </div>
          </div>
        </div>
        <main className="max-w-screen-xl">
          <div>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div>
            Lorem ipsum is a name for a common type of placeholder text. Also
            known as filler or dummy text, this is simply copy that serves to
            fill a space without actually saying anything meaningful. ... Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem
            ipsum is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021 Lorem ipsum
            is a name for a common type of placeholder text. Also known as
            filler or dummy text, this is simply copy that serves to fill a
            space without actually saying anything meaningful. ... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Mar 3, 2021
          </div>
        </,>
      </div>
    </ProtectedRoute>
  );
};

export default HomePage;
