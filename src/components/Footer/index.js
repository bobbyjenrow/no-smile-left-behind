import React from "react"
import {Link} from  'phenomic'

import Button from '../Button'
import styles from "./index.css"

const Footer = () => (
  <div className={styles.wrapper}>
    <footer className={styles.footer}>
      <Link className={styles.link} to={'/'}>
        <Button secondary fill>Patient Registration</Button>
      </Link>
      <Link className={styles.link} to={'/contact'}>
        <Button secondary fill>Request Services</Button>
      </Link>
    </footer>
  </div>
)

export default Footer
