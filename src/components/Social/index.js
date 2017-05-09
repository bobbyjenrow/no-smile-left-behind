import React from 'react';
import styles from './index';
import Svg from "react-svg-inline";
import fbIcon from 'Assets/fb.svg'
import twitIcon from 'Assets/twit.svg'
import instaIcon from 'Assets/insta.svg'

import PropTypes from 'prop-types'
// import data from 'Root/cssvars.js'

const Social = ({iconType, url})=>{
  const selectIcon = ()=>{
    switch(iconType){
      case 'fb':
        return fbIcon;
      case 'twit':
        return twitIcon;
      case 'insta':
        return instaIcon;
      default:
        return fbIcon;
    }
  }
  return(
    <a href={url}>
      {
              <Svg id="logo" className={styles.svg} svg={selectIcon()} height={"50px"} width={"50px"}  />
      }
    </a>
  )
}

Social.propTypes = {
  iconType: PropTypes.string,
  url: PropTypes.string
}

export default Social
