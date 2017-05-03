import React, {Component} from "react"
import PropTypes from 'prop-types'
import styles from './index.css'

class Contact extends Component{
  constructor(props){
    super(props);
    this.state =  {
      name: '',
      org: '',
      title: '',
      message: ''
    };
    this.handleStateChange.bind(this);
  }
  handleStateChange(e){

  }
  render(){
    return(
    <form>
      <input className={styles.input}></input>
    </form>
    )
  }
}

Contact.propTypes = {
}

export default Contact
