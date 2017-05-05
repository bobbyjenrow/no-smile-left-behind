import React from "react"
// import PropTypes from 'prop-types'
import styles from './index.css'

const ContactFooter = ()=>{
  var text = "No Smile Left Behind \n 1448 Brinkstone Ln \n Boulder, CO 49233";

  return(
  <div className={styles.wrapper}>
    <footer className={styles.footer}>
      <div className={styles.info}>
        {
          text.split("\n ").map(i=>{
            return <p className={styles.address}>{i}</p>
          })
        }
      </div>
    </footer>
  </div>
  )
}

ContactFooter.propTypes = {

}

export default ContactFooter
