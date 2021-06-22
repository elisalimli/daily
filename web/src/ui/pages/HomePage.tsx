import Head from "next/head";
import React from "react";
import { useScreenType } from "../../utils/hooks/useScreenType";
import LayoutWrapper from "../LayoutWrapper";
import CenteredLoader from "../Loader/CenteredLoader";
import ScreenLayout from "../ScreenLayout";
import ProtectedRoute from "../utilities/ProtectedRoute";
import FeedSection from "./Home/FeedSection";
import Main from "./Home/FilesAndFolders/Main";
import SearchBar from "./Home/SearchBar";
import LeftPanel from "../Panels/LeftPanel";
import MiddlePanel from "../Panels/MiddlePanel";
import RightPanel from "../Panels/RightPanel";

const HomePage = (props) => {
  const screenType = useScreenType();

  if (!screenType) return <CenteredLoader />;

  const panels = {
    LeftPanel,
    MiddlePanel,
    RightPanel,
    MiddlePanelMain: Main,
  };
  return (
    <ProtectedRoute>
      <Head>
        <title>Home | Daily</title>
      </Head>
      <LayoutWrapper screenType={screenType}>
        <ScreenLayout
          BottomSection={FeedSection}
          SearchBar={SearchBar}
          panels={panels}
          screenType={screenType}
        />
      </LayoutWrapper>
    </ProtectedRoute>
  );
};

export default HomePage;
