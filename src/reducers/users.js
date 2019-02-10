const initialState = [
  {
    name: "Tristana",
    groups: [{ id: 1 }]
  },
  {
    name: "Heimerdinger",
    groups: [{ id: 1 }]
  }
];

export default function users(state = initialState, action) {
  switch (action.type) {
    case "CREATE_USER": {
      return [...state, action.user];
    }
    case "DELETE_USER": {
      const idx = state.indexOf(action.user);

      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    }
    case "EDIT_USER": {
      return [
        ...state.slice(0, action.idx),
        action.editedUser,
        ...state.slice(action.idx + 1)
      ];
    }
    default:
      return state;
  }
}
