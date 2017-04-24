import React from 'react'
import styles from './index.css'

import {Link} from  'phenomic'

const NavLink = (props)=>{
  let isActive = this.context.router.isActive(props.to, true)
  let className = isActive ? 
  return(
      <Link className={styles.link} to={'/'}>
        {'Home'}
      </Link>
  )
}

export default NavLink
