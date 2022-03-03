import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { getStream, deleteStream } from "../actions";
import { connect } from "react-redux";
import "./StreamDelete.css";

class Delete extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  onClickHandle = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderOptions = () => {
    return (
      <React.Fragment>
        <button className="delete__submit" onClick={() => this.onClickHandle()}>
          Delete
        </button>
        <Link className="delete__cancel" to="/">
          Cancel
        </Link>
      </React.Fragment>
    );
  };
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the stream ${this.props.stream.title} ?`;
  }

  render() {
    return (
      <Modal
        options={this.renderOptions()}
        title={"Delete?"}
        description={this.renderContent()}
      ></Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, deleteStream })(Delete);
