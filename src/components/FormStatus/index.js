import React from "react"
import PropTypes from 'prop-types'
import styles from './index.css'
import * as cx from 'classnames'

const message = {
  success: "Your message  was  submitted successfully.",
  fail: "Something went wrong while sending your message. Please try again.",

}

const FormStatus = ({isSuccess})=>{
  return(
  <div className={cx({
    [styles.wrapper]: true,
    [styles.success]: isSuccess,
    [styles.fail]: !isSuccess
  })}>
    {
      isSuccess ?
       <h3 className={styles.message}>{message.success}</h3>
       :
       <h3 className={styles.message}>{message.fail}</h3>

    }
  </div>
  )
}

FormStatus.propTypes = {
  isSuccess: PropTypes.bool
}

export default FormStatus
