import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "400795490682-pvmn507peimr2rih6bdim08m59rvk56m.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick() {
    this.auth.signIn();
  }

  onSignOutClick() {
    this.auth.signOut();
  }

  renderStatus() {
    switch (this.props.isSignedIn) {
      case null:
        return <div>Something Went Wrong</div>;
      case true:
        return (
          <button
            className="header__create"
            onClick={() => this.onSignOutClick()}
          >
            Sign Out
          </button>
        );
      case false:
        return (
          <button
            className="header__create"
            onClick={() => this.onSignInClick()}
          >
            Sign In
          </button>
        );
    }
  }

  render() {
    return <div>{this.renderStatus()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
