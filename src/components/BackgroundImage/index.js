// import React from  'react'
// import PropTypes from 'prop-types'
// import cx from 'classnames'
// import styles from './index.css'
//
// const BackgroundImage = ({height, image, children, primary, secondary, light, dark, gradient})=>{
//   const load = (i)=>{
//
//   }
//   return(
//     <div className={styles.wrapper}style={{
//               "maxHeight": height
//           }}>
//     <img
//       src={image}
//       onLoad={()=>load(i)}
//       className={cx({
//         [styles.image]: true,
//         [styles.loading]: this.state.isLoading
//       })}
//     />
//       <div className={cx({
//         [styles.overlay]: true,
//         [styles.gradient]: gradient,
//         [styles.primary]: primary,
//         [styles.secondary]: secondary,
//         [styles.light]: light,
//         [styles.dark]:  dark
//       })}>
//         {children}
//       </div>
//     </div>
//   )
// }
//
// BackgroundImage.propTypes = {
//   height: PropTypes.string,
//   image: PropTypes.string,
//   children: PropTypes.bool,
//   primary: PropTypes.node,
//   secondary: PropTypes.bool,
//   light: PropTypes.bool,
//   dark: PropTypes.bool,
//   gradient: PropTypes.bool,
// }
//
// export default BackgroundImage

import React, {Component} from  'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './index.css'

class BackgroundImage extends Component{
  constructor(props){
    super(props);
    this.state = {
      isImgLoaded: false
    }
  }

  loadImageToggle(){
    this.setState({isImgLoaded: true})
    window.console.log("background loaded")
  }

  render(){
    return(
      <div className={styles.wrapper}style={{
                "maxHeight": this.props.height
            }}>
      <img
        src={this.props.image}
        onLoad={() => this.loadImageToggle()}
        className={styles.image}
        style={this.state.isImgLoaded ? {"visibility": "visible"} : {"visibility": "hidden"}}
      />
        <div className={cx({
          [styles.overlay]: true,
          [styles.gradient]: this.props.gradient,
          [styles.primary]: this.props.primary,
          [styles.secondary]: this.props.secondary,
          [styles.light]: this.props.light,
          [styles.dark]:  this.props.dark
        })}>
          {this.props.children}
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
