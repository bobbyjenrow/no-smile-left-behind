import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"

import CallToAction from '../../components/CallToAction/index.js'
// import Loading from "../../components/Loading"

import styles from "./index.css"

class MyPage extends Component(
  constructor(props){
    super(props);
    this.state = {isFooterShowing:false};
    this.showFooter = {this.isFooterShowing.bind(this)};
  }
  showFooter(){
    let {isFooterShowing} = this.state
    window.scrollY > this.prev?
    !isFooterShowing && this.setState({isFooterShowing:true})
    : isFooterShowing && this.setState({isFooterShowing:false})

    this.prev = window.scrollY;
  }

  componentDidMount(){
    window.addEventListener('scroll', this.showFooter)
  }
  componentWillMount(){
    window.removeEventListener('scroll', this.showFooter)
  }
  // const metaTitle = head.metaTitle ? head.metaTitle : head.title
  //
  // const meta = [
  //   { property: "og:type", content: "article" },
  //   { property: "og:title", content: metaTitle },
  //   {
  //     property: "og:url"
  //   },
  //   { property: "og:description", content: head.description },
  //   { name: "twitter:card", content: "summary" },
  //   { name: "twitter:title", content: metaTitle },
  //   { name: "twitter:creator", content: `@${ pkg.twitter }` },
  //   { name: "twitter:description", content: head.description },
  //   { name: "description", content: head.description },
  // ]

  render(){
    return (
      <div className={ styles.page }>

          <div className={styles.hero}>
            <CallToAction cta={head.cta} hero={head.hero}/>
          </div>
      </div>
    )}
}

MyPage.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
  cta: PropTypes.object
}

MyPage.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default MyPage
