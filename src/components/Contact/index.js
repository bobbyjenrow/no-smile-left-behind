import React, {Component} from "react"
// import PropTypes from 'prop-types'
import styles from './index.css'
import {Link} from 'phenomic'

import Button from '../Button'
import ContactItem from '../ContactItem'

class Contact extends Component{
  constructor(props){
    super(props);
    this.state =  {
      name: '',
      isOrg: false,
      org: '',
      title: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);

  }
  handleStateChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.title;
    this.setState({
      [name]: value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    window.console.log(JSON.stringify(this.state))
  }
  render(){
    const isOrg = this.state.isOrg;
    return(
    <div>
    <form className={styles.form}>
      <ContactItem type="text" title="name" caption="Name" onChange={this.handleStateChange} />
      <ContactItem type="checkbox" title="isOrg"
      caption="Do you represent an organization?" onChange={this.handleStateChange} />
      {
        isOrg &&
         <ContactItem type="text" title="org" caption="Organization" onChange={this.handleStateChange} />
      }
      <ContactItem type="text" title="title" caption="Subject" onChange={this.handleStateChange} />
      <ContactItem type="textarea" title="message" caption="Message" onChange={this.handleStateChange} />
      <Button secondary className={styles.submit} onClick={this.handleSubmit} > <label>Submit</label> </Button>
    </form>
      <div className={styles.patients}>
        <div className={styles.ptext}>Are you a patient? Register here:</div>
        <Link className={styles.link} to="/patients"><Button secondary className={styles.pbutton}><label>Register</label></Button></Link>
      </div>
    </div>
    )
  }
}

Contact.propTypes = {
}

export default Contact
