import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import Layout from '../layout'
// import PostListing from '../components/PostListing/PostListing'
// import SEO from '../components/SEO/SEO'
// import config from '../../data/SiteConfig'

const Index = ({
  data: {
    content: { heroModule: hero },
  },
}) => {
  console.log(hero)

  return (
    <div>
      <h1>{hero.headline}</h1>
      <div dangerouslySetInnerHTML={{ __html: hero.textline.childMarkdownRemark.html }} />
      <img src={hero.backgroundImage.fluid.src} alt="header background" />
    </div>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.object.isRequired,
  }).isRequired,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    content: contentfulLayoutHomepage {
      heroModule {
        headline
        textline {
          childMarkdownRemark {
            html
          }
        }
        backgroundImage {
          fluid(quality: 90) {
            src
          }
        }
      }
    }
  }
`
