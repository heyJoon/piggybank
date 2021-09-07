import {
  CREATE_SAVING_GOAL,
  UPDATE_SAVING_GOAL,
  DELETE_SAVING_GOAL,
  READ_SAVING_GOAL,
  MONTH_SAVING_GOAL,
} from "../types";

// 관리할 States : 날짜, 제목, 카테고리, 퍼센테이지, 전체금액, 전체금액에서 카테고리의 금액이 차지하는 비중

const initialState = {
  date: new Date(),
  title: "",
  price: 0,
  memo: "",
  budgetSum: 0,
  categorySum: 0,
};

const savingGoalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SAVING_GOAL:
      return { ...state, CreateSuccess: action.payload };
    case READ_SAVING_GOAL:
      return { ...state, savingGoalInfo: action.savingGoalInfo };
    case UPDATE_SAVING_GOAL:
      return { ...state, UpdateSuccess: action.payload };
    case DELETE_SAVING_GOAL:
      return { ...state, DeleteSuccess: action.payload };
    case MONTH_SAVING_GOAL:
      return {
        ...state,
        monthlySavingGoal: action.monthlySavingGoal,
        monthSuccess: action.monthSuccess,
        savingGoalSum: action.savingGoalSum,
        categorySum: action.categorySum,
      };
    default:
      return state;
  }
};

export default savingGoalReducer;
