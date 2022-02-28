import React from "react";
import { connect } from "react-redux";
import { getStreams } from "../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderOptions(id) {
    if (this.props.userId === id) {
      return (
        <div>
          <button>Edit</button>
        </div>
      );
    }
  }

  renderCreateButton() {
    if (this.props.userId) {
      return (
        <div>
          <Link to="/create">Create stream</Link>
        </div>
      );
    }
  }

  renderStreams() {
    if (this.props.streams) {
      return this.props.streams.map((stream) => {
        return (
          <div>
            <div>Okay</div>
            {this.renderOptions(stream.userId)}
          </div>
        );
      });
    } else {
      return <div>Loading</div>;
    }
  }
  render() {
    console.log(this.props.userId);
    return (
      <div>
        <div>{this.renderStreams()}</div>
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
