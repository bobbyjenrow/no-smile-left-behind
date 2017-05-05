import React from "react"
import PropTypes from 'prop-types'
import styles from './index.css'
import * as cx  from 'classnames'

const PageCap = ({title, subtitle, full, image, primary, secondary, light, dark, gradient})=>{
  return(
  <div>
  <div className={cx({
    [styles.pagecap]: true,
    [styles.full]: full
  })} style={{backgroundImage: `url("${image}")`}}>
    <div className={cx({
      [styles.overlay]: true,
      [styles.gradient]: gradient,
      [styles.primary]: primary,
      [styles.secondary]: secondary,
      [styles.light]: light,
      [styles.dark]:  dark
    })}>
    </div>
  </div>
  <h1 className={styles.title}>{title}</h1>
  <h2 className={styles.subtitle}>{subtitle.split('\\n').map(i=>(<p>{i}</p>))}</h2>

  </div>
  )
}

PageCap.propTypes = {
  title:  PropTypes.string,
  subtitle:  PropTypes.string,
  image: PropTypes.string,
  gradient: PropTypes.boolean,
  primary: PropTypes.boolean,
  secondary: PropTypes.boolean,
  light: PropTypes.boolean,
  dark: PropTypes.boolean,
  full: PropTypes.boolean
}

export default PageCap
