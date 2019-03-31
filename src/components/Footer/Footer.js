import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import UserLinks from '../UserLinks/UserLinks'

const Footer = ({ config }) => {
  const url = config.siteRss
  const { copyright } = config
  if (!copyright) {
    return null
  }
  return (
    <footer
      css={css`
        justify-content: center;
        align-content: center;
        padding: 10px 5px 5px;
      `}
    >
      <UserLinks config={config} labeled />
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-content: center;
          align-items: center;
          margin-top: 25px;
          @media (max-width: 640px - 1px) {
            justify-content: space-around;
          }
        `}
      >
        <h4>{copyright}</h4>

        <Link to={url}>
          <button type="button">Subscribe</button>
        </Link>
        <h4
          css={css`
            text-align: center;
            margin: 0;
          `}
        >
          Based on <a href="https://github.com/Vagr9K/gatsby-advanced-starter">Gatsby Advanced Starter</a>.
        </h4>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  config: PropTypes.object.isRequired,
}

export default Footer
