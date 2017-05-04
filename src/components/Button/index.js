import React, { PropTypes } from "react"
import cx from "classnames"

import styles from "./index.css"

const Button = ({ className, secondary, light,fill, big, ...otherProps }) => (
  <span
    role="button"
    { ...otherProps }
    className={ cx({
      [className]: className,
      [styles.button]: true,
      [styles.secondary]: secondary,
      [styles.light]: light,
      [styles.big]: big,
      [styles.fill]: fill
    }) }
  />
)

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  secondary: PropTypes.boolean,
  light: PropTypes.boolean,
  big: PropTypes.boolean,
  fill: PropTypes.boolean
}

Button.displayName = "Button"

export default Button
