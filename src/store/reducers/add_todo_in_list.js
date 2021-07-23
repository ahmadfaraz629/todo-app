import {
  IS_VISIBLE_ADD_TO_DO_IN_LIST,
  SET_ID_FOR_ADDING_TO_DO,
} from "../types";
const initialState = {
  isVisible: false,
  selectedId: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case IS_VISIBLE_ADD_TO_DO_IN_LIST:
      return {
        ...state,
        isVisible: action.payload,
      };
    case SET_ID_FOR_ADDING_TO_DO:
      return {
        ...state,
        selectedId: action.payload,
      };

    default:
      return state;
  }
}
