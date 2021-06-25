import Head from "next/head";
import React from "react";
import {
  SCREEN_COLUMNS_TYPE,
  useScreenType,
} from "../../utils/hooks/useScreenType";
import CenteredLoader from "../Loader/CenteredLoader";
import ProtectedRoute from "../utilities/ProtectedRoute";
import BottomBar from "./Bars/BottomBar/BottomBar";
import Navbar from "./Bars/Navbar/Navbar";
import TopBar from "./Main/TopBar";

const HomePage = () => {
  const screenType = useScreenType();

  if (!screenType) return <CenteredLoader logo />;

  let gridTemplateColumns = "60px 1fr";
  const isMobile = screenType === SCREEN_COLUMNS_TYPE.fullscreen;
  if (isMobile) {
    gridTemplateColumns = "1fr";
  }

  return (
    <ProtectedRoute>
      <Head>
        <title>Home | Daily</title>
      </Head>

      <div
        className="grid max-w-screen-xl mx-auto"
        style={{
          gridTemplateColumns,
        }}
      >
        {!isMobile ? <Navbar /> : <BottomBar />}

        <main className="max-w-screen-xl mx-auto px-4 2xl:border-r-default border-secondary-washed-out mb-4">
          <TopBar />
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
