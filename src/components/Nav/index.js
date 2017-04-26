import React, {PropTypes} from 'react'
import styles from './index.css'

import NavLink from '../NavLink'

const Nav = (props)=>{
  return(
    <nav className={styles.nav}>
      {
        props.list.map((li,ix)=>(
          <NavLink key={ix} title={li.title} to={li.url} />
        ))
      }
    </nav>
  )
}

Nav.propTypes = {
  list: PropTypes.array
}

export default Nav
