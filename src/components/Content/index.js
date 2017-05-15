import React from "react"
import PropTypes from 'prop-types'

import styles from "./index.css"

class Content extends React.Component{
  constructor(props){
    super(props)
  }
  componentWillMount(){

  }

  render(){
    return(
      <div className={ styles.content }>
        { this.props.children }
      </div>
    )
  }
}

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
