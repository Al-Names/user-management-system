export const deleteGroup = group => ({
  type: "DELETE_GROUP",
  group
});

export const editGroup = (idx, editedGroup) => ({
  type: "EDIT_GROUP",
  idx,
  editedGroup
});
