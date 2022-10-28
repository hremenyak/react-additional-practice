import React from 'react';

export const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onIncrement}>
        Increase by 1
      </button>
      <button type="button" onClick={onDecrement}>
        Decrease by 1
      </button>
    </div>
  );
};
