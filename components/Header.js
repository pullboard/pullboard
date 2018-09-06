import NextLink from 'next/link'
import { node } from 'prop-types'
import React from 'react'
import Box from '../components/Box'
import ButtonOutline from '../components/ButtonOutline'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Link from '../components/Link'
import Text from '../components/Text'
import { logOut } from '../lib/auth'
import { redirect } from '../lib/utils'

function Header({ children }) {
  return (
    <Flex alignItems="center" flexWrap="wrap" flex="0 0 auto" pt={4} px={4}>
      <Box flex={['1 1 auto', '0 1 auto']}>
        <Heading is="h1" fontSize={4}>
          <NextLink href="/" passHref>
            <Link>
              PullBoard <Text fontWeight="light">Alpha</Text>
            </Link>
          </NextLink>
        </Heading>
      </Box>
      <Box
        mx={children ? [0, 4] : 0}
        mt={children ? [4, 0] : 0}
        width={[1, 'auto']}
        flex="1 1 auto"
        order={[1, 0]}
      >
        {children}
      </Box>
      <ButtonOutline
        alignSelf="stretch"
        onClick={() => {
          logOut()
          redirect('/login')
        }}
      >
        Log out
      </ButtonOutline>
    </Flex>
  )
}

Header.propTypes = {
  children: node,
}

Header.defaultProps = {
  children: null,
}

export default Header
