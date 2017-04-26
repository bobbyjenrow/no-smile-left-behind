import React, {Component, PropTypes} from 'react'
import {Link} from 'phenomic'
import Button from '../Button'
import styles from './index.css'
import BackgroundImage from '../BackgroundImage'

class CallToAction extends Component{
  render(){
    return(
    <BackgroundImage style={styles.background} image={this.props.hero} dark>
    <div className={styles.cta}>
      <h1 className={styles.headline}>{this.props.cta.headline}</h1>
      <h3 className={styles.tagline}>{this.props.cta.tagline}</h3>
      <h3 className={styles.splitTitle}> {this.props.cta.split} </h3>
        <div className={styles.split}>
          <div className={styles.subheading1}>
            <h3 className={styles.h3}>
              {this.props.cta.link1.label}
            </h3>
            <Link className={styles.button} to={this.props.cta.link1.url}>
              <Button secondary>
                {this.props.cta.link1.phrase}
              </Button>
            </Link>
          </div>
          <div className={styles.subheading2}>
            <h3 className={styles.h3}>
              {this.props.cta.link2.label}
            </h3>
            <Link className={styles.button} to={this.props.cta.link2.url}>
              <Button secondary>
                {this.props.cta.link2.phrase}
              </Button>
            </Link>
          </div>
      </div>
    </div>
    </BackgroundImage>

  )}
}

CallToAction.propTypes = {
  hero: PropTypes.string,
  cta: PropTypes.shape({
    split:  PropTypes.string,
    headline: PropTypes.string,
    tagline: PropTypes.string,
    link1: PropTypes.shape({
      label: PropTypes.string,
      url:  PropTypes.string,
      phrase: PropTypes.string
    }),
    link2: PropTypes.shape({
      label: PropTypes.string,
      url:  PropTypes.string,
      phrase: PropTypes.string
    })
  })
}

export default CallToAction;
