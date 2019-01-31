import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, description, social } = data.site.siteMetadata
        return (
          <div style={{ display: `flex`, marginBottom: rhythm(2.5) }}>
            <div
              style={{
                display: 'flex',
                backgroundImage: `url(${
                  data.avatar.childImageSharp.fixed.src
                })`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
                backgroundSize: '50px',
                paddingLeft: '60px',
                marginBottom: '0',
                height: '50px',
                alignItems: 'center',
              }}
            >
              {`${description}`}
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/pakistan_emblem.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
