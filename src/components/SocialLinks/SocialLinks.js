import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'
import urljoin from 'url-join'
import config from '../../../data/SiteConfig'

const SocialLinks = ({ postNode, postPath, mobile }) => {
  const post = postNode.frontmatter
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath)
  const iconSize = mobile ? 36 : 48
  const filter = count => (count > 0 ? count : '')
  const renderShareCount = count => (
    <div
      css={css`
        text-align: center;
      `}
    >
      {filter(count)}
    </div>
  )

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin: 15px 0;

        div {
          margin: 5px 15px;
          cursor: pointer;
        }
      `}
    >
      <RedditShareButton url={url} title={post.title}>
        <RedditIcon round size={iconSize} />
        <RedditShareCount url={url}>{count => renderShareCount(count)}</RedditShareCount>
      </RedditShareButton>
      <TwitterShareButton url={url} title={post.title}>
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>
      <GooglePlusShareButton url={url}>
        <GooglePlusIcon round size={iconSize} />
        <GooglePlusShareCount url={url}>{count => renderShareCount(count)}</GooglePlusShareCount>
      </GooglePlusShareButton>
      <FacebookShareButton url={url} quote={postNode.excerpt}>
        <FacebookIcon round size={iconSize} />
        <FacebookShareCount url={url}>{count => renderShareCount(count)}</FacebookShareCount>
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={post.title} description={postNode.excerpt}>
        <LinkedinIcon round size={iconSize} />
        <LinkedinShareCount url={url}>{count => renderShareCount(count)}</LinkedinShareCount>
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon round size={iconSize} />
      </TelegramShareButton>
    </div>
  )
}

SocialLinks.defaultProps = {
  postNode: {},
  postPath: '',
  mobile: '',
}

SocialLinks.propTypes = {
  postNode: PropTypes.object,
  postPath: PropTypes.string,
  mobile: PropTypes.string,
}

export default SocialLinks
