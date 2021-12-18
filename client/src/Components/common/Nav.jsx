import { Link, withRouter } from "react-router-dom";
import { BsPerson, BsPersonPlus } from "react-icons/bs";
import { GrLogout, GrLogin } from "react-icons/gr";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import routes from "../../routes";
import icon from "../../images/logo_img.png";
import { LogOutUser } from "../../redux/actions/userActions";
import { useCallback } from "react";

const NavContainer = styled.nav`
  position: fixed;
  width: 90%;
  z-index: 3;
  width: 100%;
  line-height: 30px;
`;

const NavBlock = styled.div`
  background-color: ${(props) => props.theme.color.grey};
  box-shadow: 0px 0px 3px 1px ${(props) => props.theme.color.white};
  display: flex;
`;

const LogoBlock = styled.ul`
  display: flex;
  margin-left: 1rem;
  svg {
    font-size: 1.5rem;
  }
  flex: 1;
`;

const UserBlock = styled.ul`
  display: flex;
`;

const List = styled.li`
  margin-right: 1.5rem;
  border-bottom: 3px solid
    ${(props) => (props.current ? "black" : "transparent")};
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.img`
  width: 30px;
  height: 30px;
`;

/* 로그인 상태와 로그인 상태가 아닌 경우를 나누어, NavBar를 구성해준다. 또한 이 부분은 아이콘으로도 뵤여줄 것. BsFillPersonFill(로그인) */

const Nav = ({ location: { pathname }, history }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(({ userReducer }) => ({
    isAuth: userReducer.isAuth,
  }));

  const onLogOutUser = useCallback(
    () =>
      dispatch(LogOutUser()).then((response) => {
        if (response.LogOutSuccess) {
          alert("로그아웃 되었습니다.");
          history.push("/");
        } else {
          alert("로그아웃에 실패하였습니다.");
        }
      }),
    []
  );

  return (
    <NavContainer>
      <NavBlock>
        <LogoBlock>
          <List current={pathname === routes.home}>
            <SLink to={routes.home}>
              <IconContainer src={icon}></IconContainer>
              <span>PIGGYBANK</span>
            </SLink>
          </List>
        </LogoBlock>
        <UserBlock>
          {isAuth ? (
            <>
              <List current={pathname === routes.mypage}>
                <SLink to={routes.mypage}>
                  <BsPerson />
                  MyPage
                </SLink>
              </List>
              <List>
                <span style={{ cursor: "pointer" }} onClick={onLogOutUser}>
                  <GrLogout />
                  Logout
                </span>
              </List>
            </>
          ) : (
            <>
              <List current={pathname === "/join"}>
                <SLink to="/join">
                  <BsPersonPlus />
                  Join
                </SLink>
              </List>
              <List current={pathname === "/login"}>
                <SLink to="/login">
                  <GrLogin />
                  Login
                </SLink>
              </List>
            </>
          )}
        </UserBlock>
      </NavBlock>
    </NavContainer>
  );
};

export default withRouter(Nav);
