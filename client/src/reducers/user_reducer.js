import { AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../types";

const initialState = {
  user: "",
  isAuth: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      // console.log(action);
      return {
        ...state,
        user: action.userId,
        isAuth: action.Auth,
        LoginSuccess: action.LoginSuccess,
      };
    case REGISTER_USER:
      return { ...state, JoinSucess: action.payload };
    case AUTH_USER:
      return { ...state, AuthSucess: action.payload };
    // 로그아웃 테스트 해볼 것.
    case LOGOUT_USER:
      return {
        ...state,
        user: action.userId,
        isAuth: action.isAuth,
        LogOutSuccess: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
