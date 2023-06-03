

import React from "react";

function Button ({ type, classname, onClick, children }) {
  return (
  <button type={type} classname={classname} onClick={onClick}>
    {children}
    </button>
  )
}

export {Button}