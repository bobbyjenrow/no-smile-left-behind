import React from "react"
import PropTypes from 'prop-types'
import styles from './index.css'
import data from '../../appData.js'

import Social from '../Social'

const ContactFooter = ({fb, twit, insta})=>{
var text = data.address;

  return(
  <div className={styles.wrapper}>
    <footer className={styles.footer}>
      <section className={styles.info}>
        {
          text.map((i,x)=>{
            return <p key={x} className={styles.address}>{i}</p>
          })
        }
      </section>
      <section className={styles.phone}>
        Nathan Becker, DDS
        (313)500-4444
      </section>
      <section className={styles.social}>
        {
          twit ?
          <Social twit url={"https://www.facebook.com/805665149509549/photos/805668656175865/"}/>
          : fb ?
          <Social fb url={"https://www.facebook.com/805665149509549/photos/805668656175865/"}/>
          : insta ?
            <Social insta url={"https://www.facebook.com/805665149509549/photos/805668656175865/"}/>
          : null
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
