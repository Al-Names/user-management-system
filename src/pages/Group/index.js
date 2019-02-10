import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import './styles.css';

import { editGroup } from "../../actions/groups";

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editedGroup: {
        id: "",
        name: ""
      }
    };
  }

  getGroup = id => {
    const { groups } = this.props;
    return groups.find(group => group.id === +id);
  };

  render() {
    const group = this.getGroup(this.props.match.params.id);

    return (
      <div>
        <div>
          <Link to="/groups" style={{ textDecoration: "none", color: "black" }}>
            <h3>
              <i class="fas fa-arrow-left" /> Back to dashboard
            </h3>
          </Link>
        </div>
        <h2>{group.name}</h2>
        <label>Group</label>
        <hr />
        <div>
          <h3>Group Members:</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groups
});
const mapDispatchToProps = dispatch => ({
  editGroup: (index, editedGroup) => dispatch(editGroup(index, editedGroup))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Group);
