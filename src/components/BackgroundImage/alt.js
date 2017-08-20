import React, {Component} from  'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './index.css'

class BackgroundImage extends Component{
  constructor(props){
    super(props);
    {height, image, children, primary, secondary, light, dark, gradient} = this.props;
    this.state = {
      isImgLoading: true
    }
  }
  loadImgToggle(){

  }
  render(){
    return(
      <div className={styles.wrapper}style={{
                "maxHeight": height
            }}>
      <img
        src={image}
        onLoad={()=>load(i)}
        className={cx({
          [styles.image]: true,
          [styles.loading]: this.state.isImgLoading
        })}
      />
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
}
BackgroundImage.propTypes = {
  height: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.bool,
  primary: PropTypes.node,
  secondary: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  gradient: PropTypes.bool,
}

export default BackgroundImage
