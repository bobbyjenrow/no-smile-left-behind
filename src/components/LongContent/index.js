import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.css'


// var  lists = [
//   'Quick Tips', 'Plaque', 'Gum Disease', 'Diet'
// ]


const LongContent = ({sections, body})=>{
  return(
    <div className={styles.wrapper}>
    {
      sections &&
      <nav className={styles.sidebar}>
        {
          sections.map((i,x) =>(
            <li key={x}>
            <a href={"#" + i.title.split(' ').join('-').toLowerCase()}>{i.title}</a>
            </li>
          ))
        }
      </nav>
      }
      <main
        className={styles.content}
        dangerouslySetInnerHTML={{__html: body}}></main>
    </div>
  )
}

LongContent.propTypes = {
  body: PropTypes.string,
  sections: PropTypes.array
}

export default LongContent
