import React from 'react'
import styles from './index.css'

const Divider = (props)=>{
  return(
    <hr
      className={styles.hr}
      style={{
        width: props.width,
        height: props.thickness
      }}
    />
  )
}

export default Divider;
