import React from "react"
import PropTypes from 'prop-types'
import styles from './index.css'
import * as cx  from 'classnames'

const PageCap = ({title, image, primary, secondary, light, dark, gradient})=>{
  return(
  <div className={styles.pagecap} style={{backgroundImage: `url("${image}")`}}>
    <div className={cx({
      [styles.overlay]: true,
      [styles.gradient]: gradient,
      [styles.primary]: primary,
      [styles.secondary]: secondary,
      [styles.light]: light,
      [styles.dark]:  dark
    })}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  </div>
  )
}

PageCap.propTypes = {
  title:  PropTypes.string,
  image: PropTypes.string,
  gradient: PropTypes.boolean,
  primary: PropTypes.boolean,
  secondary: PropTypes.boolean,
  light: PropTypes.boolean,
  dark: PropTypes.boolean
}

export default PageCap
