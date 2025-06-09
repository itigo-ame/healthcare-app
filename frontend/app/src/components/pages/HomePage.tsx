import React, {useEffect, useState} from "react";
import Header from "../organisms/Header";
import CustomCalendar from "../organisms/CustomCalendar";
import styled from "styled-components";
import Dashboard from "../organisms/Dashboard";
import { useFetchUser } from "../organisms/useFetchUser";

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftContainer = styled.div`
  width: 25%;
  background-color: #f4f4f4;
  padding: 20px;
`;

const RightContainer = styled.div`
  width: 75%;
  padding: 20px;
`;

const HomePage: React.FC = () => {
    const { user_id, email, name } = useFetchUser();
  
  return (
    <>
      {/* ✅ ヘッダー管理は HeaderContainer に移行 */}
      <Header title="健康管理アプリ" userName={name} textColor="white" />

      <HomeContainer>
        {/* カレンダー */}
        <LeftContainer>
          <h3>カレンダー</h3>
          <CustomCalendar />
        </LeftContainer>

        {/* 右側（コンテンツ追加予定） */}
        <RightContainer>
          <Dashboard /> 
        </RightContainer>
      </HomeContainer>
    </>
  );
};

export default HomePage;