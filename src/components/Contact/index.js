import React, {Component} from "react"
// import PropTypes from 'prop-types'
import styles from './index.css'

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
    <form className={styles.form}>
      <ContactItem type="text" title="name" caption="Name" onChange={this.handleStateChange} />
      <ContactItem type="checkbox" title="isOrg"
      caption="Do you represent an organization?" onChange={this.handleStateChange} />
      {
        isOrg &&
         <ContactItem type="text" title="org" caption="Organization" onChange={this.handleStateChange} />
      }
     <ContactItem type="text" title="title" caption="Message Title" onChange={this.handleStateChange} />
      <ContactItem type="textarea" title="message" caption="Message" onChange={this.handleStateChange} />
      <Button className={styles.submit} onClick={this.handleSubmit} > <label>Submit</label> </Button>
      {/* <label className={styles.label} htmlFor="name">Name</label>
      <input id="name" value={this.state.name} onChange={this.handleNameChange} type="text" className={styles.name}/>
      <div className={styles.isOrgRow}>
        <hr className={styles.hr}/>
        <input id="isOrg" value={this.state.isOrg} onChange={this.handleIsOrgChange} type="checkbox" className={styles.isOrg}/>
        <label className={styles.label} htmlFor="isOrg">I represent an organization</label>
        <hr className={styles.hr}/>
      </div>
      <div className={styles.orgRow} >
        <label className={styles.label} htmlFor="org">Organization</label>
        <input id="org" value={this.state.org} onChange={this.handleOrgChange} type="text" className={styles.org}/>
      </div>
      <label className={styles.label} htmlFor="message">Message</label>
      <textarea id="message" value={this.state.message} onChange={this.handleMessageChange} className={styles.message}/>
      <Button className={styles.submit} onClick={this.handleSubmit} > <label>Submit</label> </Button> */}
    </form>
    )
  }
}

Contact.propTypes = {
}

export default Contact
