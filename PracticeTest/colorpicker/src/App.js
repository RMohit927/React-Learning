import React, { Component } from "react";
import ColorPicker from "./Components/index.js";

const title = "Color picker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <h4 id="app-title" data-testid="app-title" className="app-title">
              {title}
            </h4>
          </div>
        </nav>
        <ColorPicker
          colorPickerOptions={this.props.colorPickerOptions}
          initialSelectedColor={this.props.initialSelectedColor}
        />
      </div>
    );
  }
}

export default App;
