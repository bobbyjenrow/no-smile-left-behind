import React from "react"
import PropTypes from 'prop-types'
import styles from './index.css'
import * as cx  from 'classnames'

const PageCap = ({title, menu, subtitle})=>{
  return(
  <div>
    <div className={cx({
      [styles.right]: (menu == "right"),
      [styles.left]: (menu == "left"),
      [styles.center]: (menu == "center")
    })}>
    <h1 className={styles.title}>{title}</h1>
    {
      subtitle &&
          <h2 className={styles.subtitle}>{subtitle.split('\\n').map(
            (i,x)=>(<p key={x} className={styles.subline}>{i}</p>)
          )}</h2>
    }
    </div>
  </div>
  )
}

PageCap.propTypes = {
  title:  PropTypes.string,
  image: PropTypes.string,
  gradient: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  full: PropTypes.bool,
  subtitle: PropTypes.string,
  menu: PropTypes.string
}

export default PageCap
