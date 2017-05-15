import React from "react"
import PropTypes from 'prop-types'
import styles from './index.css'

const Language = ({lang})=>{
  return(
  <div className={styles.wrapper}>
  <label className={styles.label}>Choose a Language</label><br/>
  <select className={styles.language}>
    {
      lang &&

      lang.map((i,x) => <option key={x} className={styles.language} value={i.split(' ').join('-').toLowerCase()}>{i}</option>)
    }
  </select>
  </div>
  )
}

Language.propTypes = {
  lang: PropTypes.array
}

export default Language
