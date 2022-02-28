import React from "react";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../actions";
import { connect } from "react-redux";

class StreamCreate extends React.Component {
  renderError = ({ error }) => {
    if (error) {
      return <div>{error}</div>;
    }
  };

  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    return (
      <div>
        <label>{label}</label>
        <input onChange={input.onChange} />
        {this.renderError(meta)}
      </div>
    );
  };

  onFormSubmit = (formValues) => {
    console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label={"Write a name"}
          ></Field>
          <Field
            name="description"
            component={this.renderInput}
            label={"Write a description"}
          ></Field>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a name";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

const modifiedComponent = reduxForm({ form: "createStream", validate })(
  StreamCreate
);

export default connect(null, { createStream })(modifiedComponent);
