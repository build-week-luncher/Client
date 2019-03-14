import React from "react";
import * as Icon from "react-feather";
import { connect } from "react-redux";

import { updateSchool } from "../../actions";

class UpdateSchoolForm extends React.Component {
  state = {
    schoolName: this.props.singleSchool[0].schoolName,
    needAmount: this.props.singleSchool[0].needAmount,
    details: this.props.singleSchool[0].details
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateSchool = (e, id) => {
    e.preventDefault();
    const { schoolName, needAmount, details } = this.state;
    this.props.updateSchool(id, { schoolName, needAmount, details });
    this.setState({ schoolName: "", needAmount: "", details: "" });
    this.props.history.push("/login");
  };

  render() {
    const { schoolName, needAmount, details } = this.state;
    const { id } = this.props.singleSchool[0];
    console.log("ID", id);
    return (
      <form>
        <Icon.X onClick={() => this.props.history.push("/login")} />
        <input
          type="text"
          value={schoolName}
          placeholder={schoolName}
          name="schoolName"
          onChange={this.handleChange}
        />
        <input
          type="number"
          value={needAmount}
          placeholder={needAmount}
          name="needAmount"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={details}
          placeholder={details}
          name="details"
          onChange={this.handleChange}
        />
        <button onClick={e => this.updateSchool(e, id)}>Save Changes</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleSchool: state.adminReducer.singleSchool,
    updateSchool: state.adminReducer.updateSchool
  };
};

export default connect(
  mapStateToProps,
  { updateSchool }
)(UpdateSchoolForm);