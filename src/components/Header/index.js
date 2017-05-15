import React from 'react';
import styles from './index.css';

import Logo from 'Components/Logo/index.js'
import Nav from  'Components/Nav'
import data from 'Root/src/appData'


const Header = ()=>{
  return(
    <div className={styles.wrapper}>
      <header className={styles.header}>
      <Logo className={styles.logo}/>

        <Nav  className={styles.nav} list={data.nav.links}/>

      </header>
    </div>
  )
}

export default Header
