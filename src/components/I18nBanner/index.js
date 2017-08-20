import React, {Component} from "react"
import PropTypes from 'prop-types'
import styles from './index.css'

import {Link} from  "phenomic"

class Cpt extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <p>Interesado en ver esta página en ingles?</p>
        <Link to="/es">¡Haga clic aquí!</Link>
      </div>
    )
  }
}

Cpt.propTypes = {

}

export default Cpt
