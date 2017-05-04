import React, {Component} from "react"
import PropTypes from 'prop-types'
import styles from './index.css'
import classNames from 'classnames'

import {Link} from 'phenomic'



class NavItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(

      <Link
      activeClassName={styles.active}
      className={classNames({
        [styles.navItem]: true,
        [styles.secondary]: this.props.secondary,
        [styles.primary]: this.props.primary
      })}
      to={this.props.item.url}>
        {this.props.item.title}
      </Link>

    )
  }
}

NavItem.propTypes = {
  item: PropTypes.object,
  secondary: PropTypes.bool,
  primary: PropTypes.bool

}

export default NavItem
