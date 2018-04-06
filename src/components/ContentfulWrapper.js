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

const ScheduleWrapper = (props) => {
  return (
    <div>
      {console.log(props)}
      {props.component.items.map(( item ) => (
        <div key={item.id}>
          <h2>{item.title}{console.log(item)}</h2>
          <div>{item.day}</div>
          <div>{item.time}</div>
          <div>{item.location.location.lat} / {item.location.location.lon}</div>
        </div>
      ))}
    </div>
  )
}

// ScheduleWrapper.propTypes = {
//   body: PropTypes.object
// }

export { TextWrapper, HeroWrapper, ScheduleWrapper }
