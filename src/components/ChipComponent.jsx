import { Chip } from '@material-tailwind/react'
import React from 'react'

export const OutlinedChip = ({value}) => {
  return (
    <Chip variant="outlined" color="cyan" value={value} />
  )
}
