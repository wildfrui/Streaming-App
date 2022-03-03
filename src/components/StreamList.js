import React from "react";
import { connect } from "react-redux";
import { getStreams } from "../actions";
import { Link } from "react-router-dom";
import "./StreamList.css";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderOptions({ userId, id }) {
    if (this.props.userId === userId && this.props.userId !== null) {
      return (
        <div className="stream__options">
          <Link className="stream__edit" to={`/edit/${id}`}>
            Edit
          </Link>
          <Link className="stream__delete" to={`/delete/${id}`}>
            Delete
          </Link>
        </div>
      );
    }
  }

  renderCreateButton() {
    if (this.props.userId) {
      return (
        <div className="container_centered">
          <Link className="streams__create" to="/create">
            Create stream
          </Link>
        </div>
      );
    }
  }

  renderStreams() {
    if (this.props.streams) {
      return this.props.streams.map((stream) => {
        return (
          <div className="list__stream stream" key={stream.id}>
            <div className="stream__title">{stream.title}</div>
            <div className="stream__description">{stream.description}</div>
            {this.renderOptions(stream)}
          </div>
        );
      });
    } else {
      return <div>Loading</div>;
    }
  }
  render() {
    return (
      <div className="list__container">
        <div className="list__streams">{this.renderStreams()}</div>
        <div>{this.renderCreateButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { streams: Object.values(state.streams), userId: state.auth.userId };
};

export default connect(mapStateToProps, { getStreams })(StreamList);
