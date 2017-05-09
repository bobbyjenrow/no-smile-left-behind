import React from "react"
import PropTypes from 'prop-types'
import styles from './index.css'

const TabPane = ({tabs})=>{
  return(
  <div>
    <nav className={styles.tabNav}>
      {
        tabs.map((i,x)=>(
          <li key={x}><a href={'#' + i}>{i.name}</a></li>
        ))
      }
    </nav>
    <div className={styles.tabView}>
      {
        
      }
    </div>
  </div>
  )
}

TabPane.propTypes = {
  tabs: PropTypes.object
}

export default TabPane
