import React from 'react';

import './style.scss';

export function Button({children, ...props}) {
  return (
    <button {...props} className="btn">{children}</button>
  );
}