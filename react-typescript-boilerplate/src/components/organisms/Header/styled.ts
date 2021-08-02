import styled from '@emotion/styled';

export const StyledHeaderWrap = styled.div`
  position: fixed;
  padding-right: initial;

  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
`;

export const StyleHeaderCo = styled.div`
  position: relative;
  max-width: 1060px;
  height: 50px;

  ${({ theme }) => theme.mq.laptop} {
    margin: 0 auto;
    height: 50px;
    width: 87.72%;
  }
`;

export const StyleNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  height: 50px;
`;

/* main menu */

export const MainMenu = styled.ul`
  display: flex;
  padding-left: 0px;
  margin: 0px;
`;

/* right menu */

export const RightMenu = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBtn = styled.li`
  position: relative;
  padding: 5px 8px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const LoginBtn = styled.li`
  display: block;
  position: relative;
  padding: 5px 8px;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;

export const EnterBtn = styled.button`
  position: relative;
  padding: 5px 8px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const EnterPrise = styled.div`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.GRAY_BOX};
  border-radius: 20px;
  color: ${({ theme }) => theme.GRAY_COLOR};
  font-size: 14px;
`;
