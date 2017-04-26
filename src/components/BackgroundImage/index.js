import React, {PropTypes} from  'react'
import cx from 'classnames'
import styles from './index.css'

const BackgroundImage = ({height, image, children, primary, secondary, light, dark, gradient})=>{
  return(
    <div className={styles.image}
        style={{
          "maxHeight": height,
          "backgroundImage": `url("${image}")`
      }}>
      <div className={cx({
        [styles.overlay]: true,
        [styles.gradient]: gradient,
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.light]: light,
        [styles.dark]:  dark
      })}>
        {children}
      </div>
    </div>
  )
}

BackgroundImage.propTypes = {
  height: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.boolean,
  primary: PropTypes.node,
  secondary: PropTypes.boolean,
  light: PropTypes.boolean,
  dark: PropTypes.boolean,
  gradient: PropTypes.boolean,
}

export default BackgroundImage
