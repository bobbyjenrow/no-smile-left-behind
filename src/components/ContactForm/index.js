import React, (Component, PropTypes) from 'react'

import styles from './index.css'
import Button from '../Button'

class ContactForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      organization: '',
      title: '',
      message: ''
    }
    this.handleName = this.handleName.bind(this);
    this.handleOrg = this.handleOrg.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleName(e){
    this.setState({name: e.target.value})
  }
  handleOrg(e){
    this.setState({organization: e.target.value})
  }
  handleTitle(e){
    this.setState({title: e.target.value})
  }
  handleMessage(e){
    this.setState({message: e.target.value})
  }
  handleSubmit(e){
    event.preventDefault();
  }
  render(){
    return(
      <form className={styles.form}>
        <label for="name"></label>
        <input id="name" type="text" onChange={this.handleName} />
        <label for="organization"></label>
        <input id="organization" type="text" onChange={this.handleOrg}/>
        <label for="title"></label>
        <input id="title" type="text" onChange={this.handleTitle}/>
        <label for="message"></label>
        <textarea id="message" onChange={this.handleMessage} />
        <Button />
      </form>
    )
  }
}

export default ContactForm
