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
import Navbar from "./Navbar/Navbar";

const HomePage = () => {
  const screenType = useScreenType();

  if (!screenType) return <CenteredLoader logo />;

  return (
    <ProtectedRoute>
      <Head>
        <title>Home | Daily</title>
      </Head>

      <div
        className="grid max-w-screen-xl mx-auto"
        style={{
          gridTemplateColumns: "60px 1fr",
        }}
      >
        <Navbar />
        <main className="max-w-screen-xl mx-auto px-4 2xl:border-r-default 2xl:border-l-default border-secondary-washed-out">
          <div>
            <Header as="h1" fontWeight="bold" size="2xl">
              Home
            </Header>
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
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default HomePage;
