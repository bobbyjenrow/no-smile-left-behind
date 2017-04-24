import React from 'react'
import styles from './index.css'

import {Link} from  'phenomic'

const Nav = ()=>{
  return(
    <nav className={styles.nav}>
      <Link
        className={styles.link}
        activeClassName={styles.active}
        to={'/'}>
        {'Home'}
      </Link>
      <Link className={styles.link} activeClassName={styles.active} to={'/about'}>
        {'About'}
      </Link>
      <Link className={styles.link} activeClassName={styles.active} to={'/patients'}>
        {'Patient Info'}
      </Link>
      <Link className={styles.link} activeClassName={styles.active} to={'/research'}>
        {'Research'}
      </Link>
      <Link className={styles.link} activeClassName={styles.active} to={'/contact'}>
        {'Contact'}
      </Link>
    </nav>
  )
}

export default Nav
