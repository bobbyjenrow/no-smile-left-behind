import React from 'react';
import styles from './index';
import Svg from "react-svg-inline";
import logo from 'Assets/myNSLB.svg'
// import data from 'Root/cssvars.js'

const Logo = ()=>{
  return(
      <Svg id="logo" className={styles.svg} svg={logo} width={"12rem"}  />
  )
}

export default Logo
