import React from "react"
import PropTypes from 'prop-types'

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
  secondary: PropTypes.bool,
  light: PropTypes.bool,
  big: PropTypes.bool,
  fill: PropTypes.bool
}

Button.displayName = "Button"

export default Button
