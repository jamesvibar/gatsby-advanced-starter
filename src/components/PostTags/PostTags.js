import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Link } from 'gatsby'

const PostTags = ({ tags }) => (
  <div className="post-tag-container">
    {tags &&
      tags.map(tag => (
        <Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${_.kebabCase(tag)}`}>
          <button type="button">{tag}</button>
        </Link>
      ))}
  </div>
)

PostTags.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default PostTags
