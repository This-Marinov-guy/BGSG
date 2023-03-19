import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const Error = (props) => {
  return (
    <Alert status='error'>
    <AlertIcon />
    <AlertTitle>Your browser is outdated!</AlertTitle>
    <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
  </Alert>
  )
}

export default Error