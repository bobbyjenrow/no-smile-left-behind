import React from 'react'
import PropTypes from 'prop-types'
import * as cx from 'classnames'

import PageCap from '../PageCap'
import styles from './index.css'

// var  lists = [
//   'Quick Tips', 'Plaque', 'Gum Disease', 'Diet'
// ]

const LongContent = ({body, head})=>{
  // var adjustScroll = (e)=>{
  //   e.preventDefault();
  //   return null
  // }
  return(
    <div className={styles.pageWrap}>

      <PageCap  menu={head.bodySlant} full dark title={head.title} subtitle={head.subtitle} image={head.hero}/>
      <div className={styles.wrapper}>
        {
          head.sections &&
          <nav className={styles.sidebar}>
            {
              head.sections.map((i,x) =>(
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
              [styles.left]: (head.bodySlant == 'left'),
              [styles.center]: (head.bodySlant == 'center'),
              [styles.right]: (head.bodySlant == 'right'),
            })}
            dangerouslySetInnerHTML={{__html: body}}></main>
      </div>
    </div>
  )
}

LongContent.propTypes = {
  body: PropTypes.string,
  sections: PropTypes.array,
  bodySlant: PropTypes.string,
  head: PropTypes.object
}

export default LongContent
