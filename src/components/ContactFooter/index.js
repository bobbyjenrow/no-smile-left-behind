import React from "react"
import PropTypes from 'prop-types'
import styles from './index.css'

import Social from '../Social'

const ContactFooter = ({fb, twit, insta})=>{
  var text = "No Smile Left Behind \n 1448 Brinkstone Ln \n Boulder, CO 49233";

  return(
  <div className={styles.wrapper}>
    <footer className={styles.footer}>
      <section className={styles.info}>
        {
          text.split("\n ").map(i=>{
            return <p className={styles.address}>{i}</p>
          })
        }
      </section>
      <section className={styles.phone}>
        Nathan Becker, DDS
        (313)500-4444
      </section>
      <section className={styles.social}>
        {
          <Social twit url={"https://www.facebook.com/805665149509549/photos/805668656175865/"}/>
        }
      </section>

    </footer>
  </div>
  )
}

ContactFooter.propTypes = {
  fb: PropTypes.string,
  twit: PropTypes.string,
  insta: PropTypes.string,

}

export default ContactFooter
