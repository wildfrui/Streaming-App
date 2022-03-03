import React from "react";
import { connect } from "react-redux";
import { getStream, updateStream } from "../actions";
import FormShow from "./FormShow";
import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  onFormSubmit = (formValues) => {
    this.props.updateStream(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Wait</div>;
    }
    return (
      <div>
        <FormShow
          initialValues={_.pick(this.props.stream, "title", "description")}
          handleFormSubmit={this.onFormSubmit}
        ></FormShow>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, updateStream })(
  StreamEdit
);
