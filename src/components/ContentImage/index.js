import React from "react"
import PropTypes from 'prop-types'
import styles from './index.css'

import ImageResponsive, {Source} from 'react-image-responsive'

const ContentImage = (props)=>{
  return(
  <div className={styles.wrapper}>
  <ImageResponsive type="image" src={props.url} width={props.width} height={props.height}>
    <Source src={props.url} maxWidth={1600}/>
    <Source src={props.url}  maxWidth={300}/>
    <Source src={props.url}  maxWidth={500}/>
    <Source src={props.url}  maxWidth={800}/>
    <Source src={props.url} maxWidth={1000}/>
  </ImageResponsive>
  </div>
  )
}

ContentImage.propTypes = {
  width: PropTypes.string,
  height:PropTypes.string,
  url: PropTypes.string
}

export default ContentImage
