import React from 'react';
import './Button.css';

function Button({ title}) {
  return (
    <button className="Button" type="submit">
      {title}
    </button>
  );
}

export default Button;
