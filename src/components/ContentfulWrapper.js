import React from 'react'
import PropTypes from 'prop-types'

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

export { TextWrapper }
