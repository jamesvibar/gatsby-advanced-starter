import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const PostListing = ({ postEdges }) => {
  const getPostList = () => {
    const postList = []
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })
    return postList
  }

  const postList = getPostList()
  return (
    <div>
      {postList.map(post => (
        <Link to={post.path} key={post.title}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  )
}

PostListing.propTypes = {
  postEdges: PropTypes.array.isRequired,
}

export default PostListing
