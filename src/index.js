import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  // Component Lifecycle.
  componentDidMount() {
    // console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // We called setState!!!
        this.setState({ lat: position.coords.latitude });

        // We did not!!!
        // this.state.lat = position.coords.latitude;
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // componentDidUpdate() {
  //   console.log("My component was just updated - it rerendered");
  // }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
