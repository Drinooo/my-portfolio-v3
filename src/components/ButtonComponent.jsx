import { Button } from '@material-tailwind/react'
import React from 'react'

export const FilledButton = ({variant, children}) => {
  return (
    <Button variant={variant} className='font-main font-normal text-button bg-white'>{children}</Button>
  )
}