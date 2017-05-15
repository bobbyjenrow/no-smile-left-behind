import React from 'react';
import styles from './index';
import Svg from "react-svg-inline";
import logo from 'Assets/NSLB-horizontal.svg'
import {Link} from "phenomic"
// import data from 'Root/cssvars.js'

const Logo = ()=>{
  return(
    <Link to="/">
      <Svg id="logo" className={styles.svg} svg={logo} height={"100%"} width={"100%"}  />
    </Link>
  )
}

export default Logo
