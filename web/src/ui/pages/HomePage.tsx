import Head from "next/head";
import React from "react";
import { useScreenType } from "../../utils/hooks/useScreenType";
import CenteredLoader from "../Loader/CenteredLoader";
import ProtectedRoute from "../utilities/ProtectedRoute";
import { SCREEN_COLUMNS_TYPE } from "../../utils/hooks/useScreenType";
import Header from "../Typography/Header";
import { AiFillHome } from "react-icons/ai";
import Logo from "./../Logo";

const HomePage = () => {
  const screenType = useScreenType();

  if (!screenType) return <CenteredLoader logo />;

  let gridTemplateColumns = "500px 640px 325px";

  if (screenType === SCREEN_COLUMNS_TYPE[2]) {
    gridTemplateColumns = "300px 550px 1fr";
  } else if (screenType === SCREEN_COLUMNS_TYPE[1]) {
    gridTemplateColumns = "60px 640px";
  } else if (screenType === SCREEN_COLUMNS_TYPE.fullscreen) {
    gridTemplateColumns = "1fr";
  }

  return (
    <ProtectedRoute>
      <Head>
        <title>Home | Daily</title>
      </Head>

      <div className="max-w-screen-xl mx-auto">
        <div
          className="grid px-2 max-w-full"
          style={{
            gridTemplateColumns,
            gridGap: 60,
          }}
        >
          <div className="ml-auto">
            <Logo width={20} height={20} />
            <div>
              {Array.from({ length: 5 }).map(() => (
                <div className="flex">
                  <AiFillHome size="2rem" />
                  <Header as="span" size="lg" fontWeight="semibold">
                    Home
                  </Header>
                </div>
              ))}
            </div>
          </div>
          <div>b</div>
          <div>c</div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default HomePage;
