import React from "react"
import {Link} from  'phenomic'

import styles from "./index.css"

const Footer = () => (
  <div className={styles.wrapper}>
    <footer className={styles.footer}>
      <Link className={styles.link} to={'/'}>
        Patient Registry
      </Link>
      <Link className={styles.link} to={'/contact'}>
        Request Services
      </Link>
    </footer>
  </div>
)

export default Footer
