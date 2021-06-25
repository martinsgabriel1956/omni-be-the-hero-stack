import React from 'react';

import './style.scss';

export function Button(props) {
  return (
    <button className="btn">{props.children}</button>
  );
}