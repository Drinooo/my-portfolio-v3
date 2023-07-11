import { Chip } from '@material-tailwind/react'
import React from 'react'

export const OutlinedChip = ({variant, value}) => {
  return (
    <Chip variant="outlined" value={value} />
  )
}
