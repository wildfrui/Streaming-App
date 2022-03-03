import React from "react";
import FormShow from "./FormShow";
import { connect } from "react-redux";
import { createStream } from "../actions";
import Modal from "./Modal";

class StreamCreate extends React.Component {
  onFormSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <FormShow handleFormSubmit={this.onFormSubmit}></FormShow>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
