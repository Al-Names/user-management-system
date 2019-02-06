import React, { Component } from "react";
import { Link } from "react-router-dom";
class GroupsPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h3>
              <i class="fas fa-arrow-left" /> Back to dashboard
            </h3>
          </Link>
        </div>
      </div>
    );
  }
}
export default GroupsPage;
