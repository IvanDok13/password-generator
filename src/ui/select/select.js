import React from 'react';
import styles from "./select.module.css"

function Select({ options, onBlur }) {
  return (
  <select onBlur={onBlur} className={cx(styles['select'], className)}>
    {options.map((options, index) => {
      return <options key={index}>{options}</options>
    })}
  </select>
  )
}

export { Select }