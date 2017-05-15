import React, {Component} from "react"
import PropTypes from 'prop-types'
import styles from './index.css'
import {Link} from 'phenomic'

import Button from '../Button'
import ContactItem from '../ContactItem'
import FormStatus from '../FormStatus'

class Contact extends Component{
  constructor(props){
    super(props);
    this.state =  {
      name: '',
      isOrg: false,
      org: '',
      subject: '',
      email: '',
      message: '',
      isSubmit: false,
      isSuccess: null
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
  reset(){
    this.setState({
      name: '',
      isOrg: false,
      org: '',
      subject: '',
      email: '',
      message: '',
      isSubmit: false,
      isSuccess: null
    })
  }
  handleSubmit(e){
    e.preventDefault();
    window.console.log(JSON.stringify(this.state))
    const {name, org, subject, message} = this.refs
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("org", this.state.org);
    formData.append("_replyto", this.state.email);
    formData.append("subject", this.state.subject);
    formData.append("message", this.state.message);
    const req = new XMLHttpRequest();
    req.open('POST', "https://formspree.io/" + this.props.contactEmail);
    req.onreadystatechange = ()=>{
      (req.readyState == XMLHttpRequest.DONE && req.status == 200) ?
      this.setState({isSubmit: true, isSuccess: true}) :
      this.setState({isSubmit: true, isSuccess: false})
    }
    req.send(formData);
  }
  render(){
    const isOrg = this.state.isOrg;
    return(
    <div>
    <form className={styles.form}>
      {
        this.state.isSubmit &&
          <FormStatus isSuccess={this.state.isSuccess} />
      }
      <ContactItem type="text" title="name" caption="Name" onChange={this.handleStateChange} />
      <ContactItem type="checkbox" title="isOrg"
      caption="Do you represent an organization?" onChange={this.handleStateChange} />
      {
        isOrg &&
         <ContactItem type="text" title="org" caption="Organization" onChange={this.handleStateChange} />
      }
      <ContactItem type="text" title="email" caption="Email" onChange={this.handleStateChange} />
      <ContactItem type="text" title="subject" caption="Subject" onChange={this.handleStateChange} />
      <ContactItem type="textarea" title="message" caption="Message" onChange={this.handleStateChange} />
      <Button secondary className={styles.submit} onClick={this.handleSubmit} > <label>Submit</label> </Button>
    </form>
      <div className={styles.patients}>
        <div className={styles.ptext}>Are you a patient? Register here:</div>
        <Link className={styles.link} to="/patients"><Button secondary className={styles.pbutton}>Register</Button></Link>
      </div>
    </div>
    )
  }
}

Contact.propTypes = {
  contactEmail: PropTypes.string
}

export default Contact
