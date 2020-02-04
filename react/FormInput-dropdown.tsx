import React from 'react'

import { DropdownInput } from './components/DropdownRenderer'
import { BaseInputProps } from './typings/InputProps'

export default function FormInput(props: BaseInputProps) {
  return <DropdownInput path={props.path} />
}