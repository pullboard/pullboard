import React from 'react'
import ContentLoader from 'react-content-loader'
import Flex from './Flex'

function PullRequestLoader(props) {
  return (
    <Flex alignItems="center" {...props}>
      <ContentLoader
        height={60}
        width={320}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        style={{ height: 60 }}
      >
        <rect x="16" y="0" rx="3" ry="3" width="160" height="14" />
        <rect x="16" y="22" rx="3" ry="3" width="280" height="16" />
        <rect x="16" y="46" rx="3" ry="3" width="220" height="14" />
      </ContentLoader>
    </Flex>
  )
}

export default PullRequestLoader
