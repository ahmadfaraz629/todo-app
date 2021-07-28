import { ALL_LIST, ADD_LIST, EDIT_LIST, DELETE_LIST } from "../types";
const initialState = {
  lists: [],
  todosInLists: [],
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case ALL_LIST:
      return {
        ...state,
        lists: actions.payload.lists,
      };
    case ADD_LIST:
      return {
        ...state,
        lists: state.lists.concat({...actions.payload}),
      };
    case EDIT_LIST:
      const { _id: editId, name: editedName } = actions.payload;
      const selectedList = state.lists.filter((list) => list._id === editId)[0];
      selectedList.name = editedName;
      return {
        ...state,
        lists: [...state.lists],
      };
    case DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter((list) => list._id !== actions.payload.id),
      };

    default:
      return state;
  }
}
