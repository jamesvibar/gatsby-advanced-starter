import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

const UserLinks = ({ config, labeled }) => {
  const getLinkElements = () =>
    config.userLinks.map(link => (
      <button type="button" key={link.label} href={link.url}>
        {labeled ? link.label : ''}
      </button>
    ))

  if (!config.userLinks) {
    return null
  }
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        max-width: 100%;
      `}
    >
      {getLinkElements()}
    </div>
  )
}

UserLinks.defaultProps = {
  config: {},
  labeled: false,
}

UserLinks.propTypes = {
  config: PropTypes.object,
  labeled: PropTypes.bool,
}

export default UserLinks
