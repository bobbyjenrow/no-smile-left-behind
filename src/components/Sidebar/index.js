import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.css'

// var  lists = [
//   'Quick Tips', 'Plaque', 'Gum Disease', 'Diet'
// ]


const Sidebar = (props)=>{
  return(
        <nav className={styles.sidebar}>
          {
            props.list.map((i,x)=>(
              <li className={styles.sidebarItem} key={x}><a className={styles.sidebarItem} href={'#' + i.split(' ').join('-').toLowerCase()}>{i}</a></li>
            ))
          }
        </nav>
  )
}

Sidebar.propTypes = {
  list: PropTypes.string
}

export default Sidebar
