import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { css, jsx } from '@emotion/core'
import Layout from '../layout'
import UserInfo from '../components/UserInfo/UserInfo'
import Disqus from '../components/Disqus/Disqus'
import PostTags from '../components/PostTags/PostTags'
import SocialLinks from '../components/SocialLinks/SocialLinks'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './b16-tomorrow-dark.css'
import './post.css'

const PostTemplate = ({ pageContext, data }) => {
  const { slug } = pageContext
  const postNode = data.markdownRemark
  const post = postNode.frontmatter
  if (!post.id) {
    post.id = slug
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID
  }
  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
            `}
          >
            <PostTags tags={post.tags} />
            <SocialLinks postPath={slug} postNode={postNode} />
          </div>
          <UserInfo config={config} />
          <Disqus postNode={postNode} />
        </div>
      </div>
    </Layout>
  )
}

PostTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default PostTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`
