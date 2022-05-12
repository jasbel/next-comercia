import { Box, BoxProps } from '@mui/material'
import React from 'react'

interface Props extends BoxProps {}

const Flex = (props: Props) => {
  return (
    <Box display={'flex'} {...props} />
  )
}

export default Flex