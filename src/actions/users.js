export const deleteUser = user => ({
  type: "DELETE_USER",
  user
});
export const editUser = (idx, editedUser) => ({
  type: "EDIT_USER",
  idx,
  editedUser
});
