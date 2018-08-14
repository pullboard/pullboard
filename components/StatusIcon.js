import React from 'react'
import { get } from '../lib/utils'
import CheckIcon from './CheckIcon'
import DotIcon from './DotIcon'
import XIcon from './XIcon'

function StatusIcon({ pullRequest, ...props }) {
  const buildStatus = get(
    ['commits', 'nodes', 0, 'commit', 'status', 'state'],
    pullRequest,
  )
  switch (buildStatus) {
    case 'SUCCESS':
      return <CheckIcon {...props} />

    case 'PENDING':
      return <DotIcon {...props} />

    case 'FAILURE':
      return <XIcon {...props} />

    default:
      return null
  }
}

export default StatusIcon
