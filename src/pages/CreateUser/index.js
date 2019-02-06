// import React from "react";
// import { connect } from "react-redux";

// import { createUser } from "../../actions/createUsers";

// class CreateUser extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       newUser: {
//         name: "",
//         groups: []
//       }
//     };
//   }

//   removeGroupFromNewUser = (group = "") => {
//     const { groups } = this.state.newUser;
//     const idx = groups.indexOf(group);

//     if (idx !== -1) {
//       this.setState(state => ({
//         ...state,
//         newUser: {
//           ...state.newUser,
//           groups: [...groups.slice(0, idx), ...groups.slice(idx + 1)]
//         }
//       }));
//     }
//   };

//   addGroupToNewUser = (group = "") => {
//     // Chequear si el groupo ya esta
//     this.setState(state => ({
//       ...state,
//       newUser: {
//         ...state.newUser,
//         groups: [...state.newUser.groups, group]
//       }
//     }));
//   };

//   isGroupAssigned = group => {
//     const { groups } = this.state.newUser;
//     return groups.indexOf(group) !== -1;
//   };

//   handleGroupChange = (e, group) => {
//     const { checked } = e.target;

//     if (checked) {
//       this.addGroupToNewUser(group);
//     } else {
//       this.removeGroupFromNewUser(group);
//     }
//   };

//   handleChangeUserInput = e => {
//     const { value } = e.target;
//     this.setState(state => ({
//       ...state,
//       newUser: {
//         ...state.newUser,
//         name: value
//       }
//     }));
//   };

//   cleanNewUser = () => {
//     this.setState({
//       newUser: {
//         name: "",
//         groups: []
//       }
//     });
//   };

//   createUser(newUser) {
//     if (newUser.name !== "") {
//       this.props.createUser(newUser);
//       this.cleanNewUser();
//       this.props.history.push("/users");
//     }
//   }

//   render() {
//     const { newUser } = this.state;
//     const { groups } = this.props;

//     return (
//       <section>
//         <h2>Add User</h2>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={newUser.name}
//           onChange={this.handleChangeUserInput}
//         />
//         <h3>Assign Groups</h3>
//         {groups.length ? (
//           <table>
//             <tbody>
//               <tr>
//                 <th>Name</th>
//                 <th>Assign</th>
//               </tr>
//               {groups.map((group, i) => (
//                 <tr key={i}>
//                   <td>{group.name}</td>
//                   <td>
//                     <input
//                       type="checkbox"
//                       onChange={e => this.handleGroupChange(e, group)}
//                       checked={this.isGroupAssigned(group)}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <div>
//             <p>Sorry... currently there are no groups to assign</p>
//           </div>
//         )}

//         <div className="button-container">
//           <button
//             label={"Create User"}
//             onClick={() => this.createUser(newUser)}
//           />
//         </div>
//       </section>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   users: state.users,
//   groups: state.groups
// });

// const mapDispatchToProps = dispatch => ({
//   createUser: user => dispatch(createUser(user))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CreateUser);
import React, { Component } from "react";

export default class index extends Component {
  render() {
    return <div>HEYYYYYYY</div>;
  }
}
