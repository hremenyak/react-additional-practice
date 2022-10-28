import React, { Component } from 'react';
import '../Dropdown/Dropdown.css';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => {
      return { visible: !prevState.visible };
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'Hide' : 'Show'}
        </button>

        {visible && <div className="Dropdown__menu">Dropdown Menu</div>}
      </div>
    );
  }
}
