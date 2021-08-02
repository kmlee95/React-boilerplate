import React from 'react';
import { BsSearch } from 'react-icons/bs';

import Button from '@/components/atoms/Button';
import {
  EnterBtn,
  EnterPrise,
  LoginBtn,
  MainMenu,
  RightMenu,
  SearchBtn,
  StyledHeaderWrap,
  StyleHeaderCo,
  StyleNav,
} from './styled';

interface HeaderProps {}

const menuData = ['탐색', '커리어 성장', '직군별 연봉', '이력서', '매치업', '프리랜서', 'Ai 합격예측'];

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <StyledHeaderWrap>
      <StyleHeaderCo>
        <StyleNav>
          <div style={{ fontSize: '20px' }}>Wanted</div>
          <MainMenu>
            {menuData.map((v, i) => {
              return <Button key={i} name={v} />;
            })}
          </MainMenu>
          <RightMenu>
            <SearchBtn>
              <BsSearch />
            </SearchBtn>
            <LoginBtn>회원가입 / 로그인</LoginBtn>
            <EnterBtn>
              <EnterPrise>기업 서비스</EnterPrise>
            </EnterBtn>
          </RightMenu>
        </StyleNav>
      </StyleHeaderCo>
    </StyledHeaderWrap>
  );
};

export default Header;
