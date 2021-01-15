import React from "react"
import { CustomButton } from "./style"

interface ButtonData {
  backgroundColor?: string
  textColor?: string
  curve?: string
  loading?: boolean
  text: string
  onClick?: Function
  borderColor?: string
}


const Button = (props: ButtonData) => {
  return (
    <CustomButton
      aria-disabled={props.loading}
      disabled={props.loading}
      backgroundColor={props.backgroundColor}
      textColor={props.textColor}
      curve={props.curve}
      loading={props.loading}
      borderColor={props.borderColor}
      onClick={() => {
        if (props.onClick) props.onClick()
      }}>
      <p>{props.text}</p>
    </CustomButton>
  )
}


export default Button

