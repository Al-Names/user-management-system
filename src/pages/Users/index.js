import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteUser } from "../../actions/users";
import "./styles.css";

class UsersPage extends Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h3>
              <i class="fas fa-arrow-left" /> Back to dashboard
            </h3>
          </Link>
        </div>
        <hr />
        <h1>Users</h1>
        {users.length !== 0 ? (
          <div>
            <div className="card-columns">
              <Link to="/users/create" style={{ color: "white" }}>
                <div className="card">
                  <h2 className="text-center">
                    <i class="fas fa-user-plus" /> Add User
                  </h2>
                </div>
              </Link>
              {users.map((user, i) => (
                <Link to={`/users/${user.name}`} style={{ color: "white" }}>
                  <div key={i} className="card">
                    <h2 className="text-center">
                      <i class="fas fa-user" /> {user.name}
                    </h2>

                    {/* <ul>
                    {user.groups.map((group, i) => (
                      <li key={i}>
                        {groups.find(grp => grp.id === group.id).name}
                      </li>
                    ))}
                  </ul> */}

                    {/* <Button
                      className={"remove-button"}
                      icon={"trash-o"}
                      onClick={() => this.props.deleteUser(user)}
                    /> */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p>Sorry... there are no users created</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  groups: state.groups
});

const mapDispatchToProps = dispatch => ({
  deleteUser: user => dispatch(deleteUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
