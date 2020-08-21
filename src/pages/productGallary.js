import React, { Component } from "react";
import "./index.css";
const classNames = require('classnames');

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelected: false,
      sc: this.props.initialSelectedColor
    }
  }
  changeSelectedColor(e){
    this.setState({
      colorSelected: true,
      sc: e.target.style.backgroundColor
    })
  }
  render() {
    let selectedColor = this.state.sc;
    return (
      <div>
        <div className="layout-row justify-content-center">
          <div className="card mt-75">
            <div style={{'backgroundColor': this.state.sc} } className="canvas" data-testid="selectedColor">
              <p style={{'backgroundColor': this.state.sc} } className="text-center mx-auto px-5">{selectedColor}</p>
            </div>
            <div className="card-actions">
              <div className="layout-row justify-content-center align-items-center" data-testid="colorPickerOptions">
                {this.props.colorPickerOptions.map((color, index) => {
                  return (
                    <div onClick={(e) => this.changeSelectedColor(e)}
                     style={{'backgroundColor':color}}
                      className={
                        classNames({
                          'color-box': true,
                          'mx-8': true,
                          'my-15': true,
                          'selected': selectedColor === color
                        })
                      }
                      key={color}
                    ></div>
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
