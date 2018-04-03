import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const TextWrapper = (props) => (
  <div>
    <div
      dangerouslySetInnerHTML={{
        __html: props.component.body.childMarkdownRemark.html
      }}
    />
  </div>
)

TextWrapper.propTypes = {
  body: PropTypes.object
}

const HeroWrapper = (props) => (
  <div>
    {console.log(props)}
    <div
      dangerouslySetInnerHTML={{
        __html: props.component.body.childMarkdownRemark.html
      }}
    />
    <Img resolutions={props.component.media.resolutions} />
  </div>
)

HeroWrapper.propTypes = {
  body: PropTypes.object
}

export { TextWrapper, HeroWrapper }
