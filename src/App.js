import "./App.css";
import React from "react";
import Profile from "./components/Profile"; // made a seperate "Profile" component

class App extends React.Component {
  state = {
    show: true,
    
  };

  render() {
    // This variable controls when to show/hide the Profile component
    let profileEl = this.state.show ? (
      <Profile />
    ) : (
      <div>Click the button to show profile</div>
    );

    // This variable changes the text of the button
    let buttonText = this.state.show ? "hide" : "show";

    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          {buttonText} {/* */}
        </button>
        {profileEl}
      </div>
    );
  }
}

export default App;
