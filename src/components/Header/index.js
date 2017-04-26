import React from 'react';
import styles from './index.css';

import Logo from 'Components/Logo/index.js'
import Nav from  'Components/CollapseNav/index.js'
import data from 'Root/src/appData'


const Header = ()=>{
  return(
    <div className={styles.wrapper}>
      <header className={styles.header}>
      <Logo className={styles.logo}/>
      <div className={styles.navWrapper}>
        <Nav  className={styles.nav} list={data.nav.links}/>
      </div>
      </header>
    </div>
  )
}

export default Header
