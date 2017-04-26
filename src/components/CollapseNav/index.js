import React from 'react'

import Nav from '../Nav'
// import Burger from '../Burger'

import styles from './index.css'
import data from 'Root/src/appData'

const CollapseNav = ()=>{
  return(
    <div className={styles.wrapper}>
      <Nav list={data.nav.links} />
    </div>
  )
}

export default CollapseNav
