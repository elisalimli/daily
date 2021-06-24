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

  let gridTemplateColumns = "60px 640px 325px";

  if (screenType === SCREEN_COLUMNS_TYPE[2]) {
    gridTemplateColumns = "60px 550px 1fr";
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

      <div
        className="grid"
        style={{
          gridTemplateColumns,
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
        {/* <div className="sticky top-0 h-screen py-2 border-r-default border-secondary-washed-out">
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-start justify-between h-full px-4">
              <div>
                <div className="pb-2">
                  <Logo width={30} height={30} />
                </div>

                <div>
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
                  ].map(({ icon: Icon, href }) => (
                    <div className="flex py-2">
                      <Link href={href}>
                        <Icon className="text-2xl" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  className="rounded-full"
                  width="40px"
                  height="40px"
                  src="https://avatars.githubusercontent.com/u/67149699?v=4"
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </div> */}
        <div>b</div>
        <div>c</div>
      </div>
    </ProtectedRoute>
  );
};

export default HomePage;
