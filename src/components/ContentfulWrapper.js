import React from 'react'
import PropTypes from 'prop-types'

const TextComponent = (props) => (
  <div>
    <div
      dangerouslySetInnerHTML={{
        __html: props.component.body.childMarkdownRemark.html
      }}
    />
  </div>
)

TextComponent.propTypes = {
  body: PropTypes.object
}

export { TextComponent }
