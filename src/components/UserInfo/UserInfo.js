import React from 'react'
import PropTypes from 'prop-types'
import { Follow } from 'react-twitter-widgets'

const UserInfo = ({ expanded, config }) => (
  <Follow username={config.userTwitter} options={{ count: expanded ? true : 'none' }} />
)

UserInfo.defaultProps = {
  config: {},
  expanded: false,
}

UserInfo.propTypes = {
  config: PropTypes.object,
  expanded: PropTypes.bool,
}

export default UserInfo
