import React from "react"
import PropTypes from 'prop-types'

import Helmet from "react-helmet"
import warning from "warning"
import { joinUri } from "phenomic"
import data from "../../appData"

import Loading from "../../components/Loading"
import Footer from "../../components/Footer"
import PageCap from '../../components/PageCap'
import styles from "./index.css"
import BackgroundImage from '../../components/BackgroundImage'
import Contact from '../../components/Contact'
import ContactFooter from  '../../components/ContactFooter/'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const ContactPage = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
  {
    metadata: { pkg },
  }
) => {
  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const socialImage = head.hero && head.hero.match("://") ? head.hero
    : joinUri(process.env.PHENOMIC_USER_URL, head.hero)

  const link=[
    {rel:"apple-touch-icon", sizes:"57x57", href:"Assets/favicon.ico/apple-touch-icon-57X57.png"},
    { rel:"apple-touch-icon", sizes:"180x180", href:"Assets/favicon.ico/apple-touch-icon.png"},
    { rel:"icon", type:"image/png", href:"Assets/favicon.ico/favicon-32x32.png", sizes:"32x32"},
    { rel:"icon", type:"image/png", href:"Assets/favicon.ico/favicon-16x16.png", sizes:"16x16"},
    { rel:"manifest", href:"Assets/favicon.ico/manifest.json"},
    { rel:"mask-icon", href:"Assets/favicon.ico/safari-pinned-tab.svg", color:"#5bbad5"}
  ]

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:image", content: socialImage },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "twitter:image", content: socialImage },
    { name: "description", content: head.description },
    { name:"theme-color", content:"#ffffff"},
    {name: "viewport", content: "width=device-width, initial-scale=1"}
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        link={ link }
        meta={ meta }
      />
      <ReactCSSTransitionGroup
        transitionName="bg"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionAppear={true}
        transitionAppearTimeout={500}
      >
      <BackgroundImage dark image={head.hero} />
      </ReactCSSTransitionGroup>
      {
        isLoading ?
            <Loading />
          :
          <div>
            <PageCap menu={head.bodySlant} full dark title={head.title} subtitle={head.subtitle} image={head.hero}/>
            <div className={styles.contentContainer}>
              <Contact contactEmail={data.contactEmail} className={styles.contact}/>
              <ContactFooter />
            </div>
            {children}
          </div>
      }
      <Footer />
    </div>
  )
}

ContactPage.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

ContactPage.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default ContactPage
