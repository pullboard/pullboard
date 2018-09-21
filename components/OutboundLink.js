import React from 'react'
import Link from './Link'

function OutboundLink(props) {
  return <Link target="_blank" rel="noopener noreferrer" {...props} />
}

export default OutboundLink
