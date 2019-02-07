import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { deleteGroup } from "../../actions/groups";

import "./styles.css";

class Groups extends Component {
  render() {
    const { users, groups } = this.props;
    let showDeleteButton = true;

    return (
      <div>
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h3>
              <i class="fas fa-arrow-left" /> Back to dashboard
            </h3>
          </Link>
        </div>
        <h1>Groups</h1>
        {groups.length !== 0 ? (
          <div>
            {this.props.groups.map((group, i) => (
              <Link to={`/groups/${group.id}`}>
                <div key={i}>
                  <h3>{group.name}</h3>
                  <td>
                    {/* 
                      <Button
                        className={"remove-button"}
                        icon={" fa-pencil-square-o"}
                      />
                    </Link> */}

                    {!showDeleteButton ? (showDeleteButton = true) : null}
                    {users.map(function(user) {
                      // For each user, finds if the group exists in the users groups
                      // else it renders a delete button
                      if (user.groups.find(grp => grp.id === group.id)) {
                        showDeleteButton = false;
                      }
                      return showDeleteButton;
                    })}
                    {/* {showDeleteButton ? (
                      <Button
                        className={"remove-button"}
                        icon={"trash-o"}
                        onClick={() => this.props.removeGroup(group)}
                      />
                    ) : null} */}
                  </td>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div>
            <p>Sorry... there are no groups created</p>
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
  removeGroup: group => dispatch(deleteGroup(group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups);
