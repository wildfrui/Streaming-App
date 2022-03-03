import React from "react";
import { Field, reduxForm } from "redux-form";
import "./FormShow.css";

class FormShow extends React.Component {
  renderError = ({ error }) => {
    if (error) {
      return <div className="form__error">{error}</div>;
    }
  };

  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    return (
      <div className="form__field">
        <label className="form__label">{label}</label>
        <input className="form__input" {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onFormSubmit = (formValues) => {
    this.props.handleFormSubmit(formValues);
  };

  render() {
    console.log(this.props.initialValues);
    return (
      <div>
        <form
          className="form__container"
          action=""
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
        >
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
          <button className="form__submit">Submit</button>
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

export default reduxForm({ form: "streamForm", validate })(FormShow);
