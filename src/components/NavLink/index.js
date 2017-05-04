import React, {PropTypes} from 'react'
import styles from './index.css'

import {Link} from  'phenomic'

const NavLink = (props)=>{
  return(
      <Link activeClassName={styles.active} className={styles.link} to={props.to}>
        {props.title}
      </Link>
  )
}

NavLink.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string
}

export default NavLink
