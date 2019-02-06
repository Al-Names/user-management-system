import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./styles.css";

import { editUser } from "../../actions/users";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      showEdit: false
    };
  }

  getUser = name => {
    const { users } = this.props;
    return users.filter(user => user.name === name);
  };

  handleChangeUserInput = e => {
    const { value } = e.target;
    this.setState(state => ({
      ...state,
      user: {
        ...state.user,
        name: value
      }
    }));
  };

  isGroupAssigned = group => {
    const { groups } = this.state.user;
    return groups.indexOf(group) !== -1;
  };

  doesUserHaveGroup = group => {
    const { groups } = this.state.user;
    return !!groups.filter(g => g.id === group.id).length;
  };

  handleGroupChange = (e, group) => {
    const { checked } = e.target;
    if (checked) {
      this.addGroupToUser(group);
    } else {
      this.removeGroupFromUser(group);
    }
  };

  removeGroupFromUser = (group = "") => {
    const { groups } = this.state.user;
    // const idx = groups.indexOf(group.id);
    const idx = groups.indexOf(groups.find(grp => grp.id === group.id));

    if (idx !== -1) {
      this.setState(state => ({
        ...state,
        user: {
          ...state.user,
          groups: [...groups.slice(0, idx), ...groups.slice(idx + 1)]
        }
      }));
    }
  };

  addGroupToUser = (group = "") => {
    this.setState(state => ({
      ...state,
      user: {
        ...state.user,
        groups: [...state.user.groups, group]
      }
    }));
  };

  onShow = e => {
    this.setState({ showEdit: !this.state.showEdit });
  };

  editUser = () => {
    if (this.state.user.name !== "") {
      const idx = this.props.users.indexOf(this.props.user);
      this.props.editUser(idx, this.state.user);
      this.props.history.push("/users");
    }
  };

  render() {
    const { user, groups } = this.props;
    const { showEdit } = this.state;

    return (
      <div>
        <div>
          <Link to="/users" style={{ textDecoration: "none", color: "black" }}>
            <h3>
              <i className="fas fa-arrow-left" /> Back to users
            </h3>
          </Link>
        </div>
        <div className="userWrapper">
          {
            <div>
              <h1>{user.name}</h1>

              <div>
                <label>
                  {user.name} has been assigned to the following groups:
                </label>
                <div className="card-columns">
                  {user.groups &&
                    user.groups.map((group, i) => (
                      <div key={i} className="card">
                        <label>
                          {groups.find(grp => grp.id === group.id).name}
                        </label>
                      </div>
                    ))}
                </div>
              </div>
              <hr />
              <div>
                <h3>
                  Edit{" "}
                  <i
                    onClick={this.onShow}
                    className="fas fa-sort-down"
                    style={{ cursor: "pointer" }}
                  />
                </h3>
                {showEdit ? (
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ width: "400px" }}
                      onChange={this.handleChangeUserInput}
                      value={this.state.user.name}
                    />

                    <div>
                      <h4>Assigned Groups:</h4>
                      {groups.length > 0 ? (
                        <div className="row">
                          <div className="columns">
                            {groups.map((group, i) => (
                              <div
                                key={i}
                                className="groupChoice text-center col-md-4"
                              >
                                <label>{group.name}</label>
                                <br />
                                <input
                                  type="checkbox"
                                  onChange={e =>
                                    this.handleGroupChange(e, group)
                                  }
                                  defaultChecked={this.doesUserHaveGroup(group)}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p>
                            Sorry... currently there are no groups to assign
                          </p>
                        </div>
                      )}
                    </div>
                    <div>
                      <button
                        className="btn btn-success"
                        style={{ padding: 8 }}
                        onClick={this.editUser}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

const getUser = (name, users) => {
  return users.filter(user => user.name === name);
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    user: getUser(ownProps.match.params.name, state.users)[0],
    groups: state.groups
  };
};

const mapDispatchToProps = dispatch => ({
  editUser: (idx, editedUser) => dispatch(editUser(idx, editedUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
