import { Flex, Image } from '@chakra-ui/react'

export function SignInBanner() {
  return (
    <Flex
      bgImage="/images/twitter-banner.png"
      minH="100vh"
      bgPos="center center"
      width="55%"
      align="center"
      userSelect="none"
      pointerEvents="auto"
    >
      <Flex width="100%" padding="32px" maxH="50%" justify="center">
        <Image
          src="/images/twitter-bird-logo-svgrepo-com.svg"
          width="35%"
          minW="11.25rem"
          maxW="23.75rem"
          pointerEvents="auto"
        />
      </Flex>
    </Flex>
  )
}
