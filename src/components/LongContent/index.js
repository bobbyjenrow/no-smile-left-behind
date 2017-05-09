import React from 'react'
import PropTypes from 'prop-types'
import * as cx from 'classnames'

import styles from './index.css'


// var  lists = [
//   'Quick Tips', 'Plaque', 'Gum Disease', 'Diet'
// ]


const LongContent = ({sections, body, bodySlant})=>{
  return(
    <div className={styles.wrapper}>
    {
      sections &&
      <nav className={styles.sidebar}>
        {
          sections.map((i,x) =>(
            <li key={x} className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href={"#" + i.title.split(' ').join('-').toLowerCase()}>{i.title}</a>
            </li>
          ))
        }
      </nav>
      }
      <main
        className={cx({
          [styles.content]:  true,
          [styles.left]: (bodySlant == 'left'),
          [styles.center]: (bodySlant == 'center'),
          [styles.right]: (bodySlant == 'right'),
        })}
        dangerouslySetInnerHTML={{__html: body}}></main>
    </div>
  )
}

LongContent.propTypes = {
  body: PropTypes.string,
  sections: PropTypes.array,
  bodySlant: PropTypes.string
}

export default LongContent
