import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import WelcomeSection from '../Components/WelcomeSection';
import Seperator from "../Components/Seperator.tsx";
import CenterComponent from "../Components/CenterComponent.tsx";
import NewsSection from "../Components/NewsSection.tsx";
import Footer from "../Components/Footer.tsx";

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const MainPage = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);

  return (
    <MainPageWrapper>
      <Header ref={headerRef} setHeaderHeight={setHeaderHeight} />
      <WelcomeSection headerOffset={headerHeight} />
      <Seperator />
      <CenterComponent />
      <NewsSection />
      <Footer />
    </MainPageWrapper>
  );
};

export default MainPage;