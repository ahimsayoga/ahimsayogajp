import React from 'react'
import PropTypes from 'prop-types'

const TextWrapper = (props) => (
  console.log(props)
  // <div>
  //   <div
  //     dangerouslySetInnerHTML={{
  //       __html: props.body.childMarkdownRemark.html
  //     }}
  //   />
  // </div>
)

TextWrapper.propTypes = {
  body: PropTypes.object
}

export default TextWrapper
