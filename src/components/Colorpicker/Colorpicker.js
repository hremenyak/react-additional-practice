import React from 'react';
import { Component } from 'react';
import '../Colorpicker/Colorpicker.css';

export class ColorPicker extends Component {
  state = {
    activeOptionIndx: 0,
  };

  setActiveInd = index => {
    this.setState({ activeOptionIndx: index });
  };
  makeOptionClassName = index => {
    const classOptions = ['ColorPicker__option'];
    if (index === this.state.activeOptionIndx) {
      classOptions.push('ColorPicker__option--active');
    }
    return classOptions.join(' ');
  };
  render() {
    const { activeOptionIndx } = this.state;
    const { options } = this.props;
    const activeOptionLabel = options[activeOptionIndx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">ColorPicker</h2>
        <p> The chosen color is: {activeOptionLabel.label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => {
                  this.setActiveInd(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
