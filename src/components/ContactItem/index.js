import React from "react"
import PropTypes from 'prop-types'
import styles from './index.css'
import * as cx from 'classnames'

const ContactItem = ({title, value, onChange, type, caption})=>{
  switch(type){
      case('text'):
        return(
            <div className={styles.wrapper}>
              <label
                className={cx({
                  [styles.label]: true,
                  [styles.textLabel]: true
                })}
                htmlFor="title"
              >{caption}</label>
              <input
                title={title}
                type="text"
                className={cx({
                  [styles.input]: true,
                  [styles.textInput]: true
                })}
                value={value}
                onChange={onChange}
               />
            </div>
          )
          case('textarea'):
            return(
              <div className={styles.wrapper}>
                <label
                  className={cx({
                    [styles.label]: true,
                    [styles.textLabel]: true
                  })}
                  htmlFor="title"
                >{caption}</label>
                <textarea
                  title={title}
                        className={cx({
                    [styles.input]: true,
                    [styles.textArea]: true
                  })}
                  value={value}
                  onChange={onChange}
                 />
               </div>
            )
          case('radio'):
            return(
              <div className={styles.wrapper}>
                <label
                  className={cx({
                    [styles.label]: true,
                    [styles.radioLabel]: true
                  })}
                  htmlFor="title"
                >{caption}</label>
                <input
                  title={title}
                  type="radio"
                  className={cx({
                    [styles.input]: true,
                    [styles.radio]: true
                  })}
                  value={value}
                  onChange={onChange}
                 />
               </div>
            )
          case('checkbox'):
            return(
              <div className={styles.rowWrapper}>
                <label
                  className={cx({
                    [styles.label]: true,
                    [styles.checkboxLabel]: true
                  })}
                  htmlFor="title"
                >{caption}</label>
                <input
                  title={title}
                  type="checkbox"
                  className={cx({
                    [styles.input]: true,
                    [styles.checkbox]: true
                  })}
                  value={value}
                  onChange={onChange}
                 />
               </div>
            )
            default:
              return(
                <div className={styles.wrapper}>
                  <label
                    className={cx({
                      [styles.label]: true,
                      [styles.textLabel]: true
                    })}
                    htmlFor="title"
                  >{caption}</label>
                  <input
                    title={title}
                    type="text"
                    rows="4"
                    className={cx({
                      [styles.input]: true,
                      [styles.textInput]: true
                    })}
                    value={value}
                    onChange={onChange}
                   />
                </div>
              )
      }
}

ContactItem.propTypes = {
  title: PropTypes.string,
  type: PropTypes.bool,
  caption: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.function
}

export default ContactItem
