import React from 'react'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'
import PropTypes from 'prop-types'
import config from '../../data/SiteConfig'

const MainLayout = ({ children }) => (
  <div>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        html {
          height: 100%;
        }

        body {
          margin: 0;
          padding: 20px;
        }
      `}
    />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    {children}
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default MainLayout
