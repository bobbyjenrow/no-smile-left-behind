import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.css'

import NavItem from '../NavItem'

const Nav = (props)=>{
  return(
    <nav className={styles.nav}>
      {
        props.list.map((li,ix)=>(
          <NavItem key={ix} item={li} />
        ))
      }
    </nav>
  )
}

Nav.propTypes = {
  list: PropTypes.array
}

export default Nav
