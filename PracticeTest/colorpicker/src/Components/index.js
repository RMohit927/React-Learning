import React, { Component } from "react";
import "./index.css";
const classNames = require("classnames");

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: this.props.initialSelectedColor,
    };
  }

  setSelectedColor(color) {
    this.setState({ selectedColor: color });
  }

  render() {
    let selectedColor = this.state.selectedColor;
    return (
      <div>
        <div className="layout-row justify-content-center">
          <div className="card mt-75">
            <div
              className="canvas"
              data-testid="selectedColor"
              style={{ backgroundColor: selectedColor }}
            >
              <p className="text-center mx-auto px-5">{selectedColor}</p>
            </div>
            <div className="card-actions">
              <div
                className="layout-row justify-content-center align-items-center"
                data-testid="colorPickerOptions"
              >
                {this.props.colorPickerOptions.map((color, index) => {
                  return (
                    <div
                      className={classNames({
                        "color-box": true,
                        "mx-8": true,
                        "my-15": true,
                        selected: selectedColor === color,
                      })}
                      onClick={() => this.setSelectedColor(color)}
                      key={color}
                      style={{ backgroundColor: color }}
                    >
                      {color}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
