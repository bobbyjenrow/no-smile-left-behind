import React from 'react';
import styles from './index.css';

import Logo from 'Components/Logo/index.js'
import Nav from  'Components/Nav/index.js'

const Header = ()=>{
  return(
    <div className={styles.wrapper}>
      <header className={styles.header}>
      <Logo className={styles.logo}/>
      <Nav  className={styles.nav} />
      </header>
    </div>
  )
}

export default Header
