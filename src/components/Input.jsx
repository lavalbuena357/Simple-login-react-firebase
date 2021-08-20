import React from 'react'
import styled from 'styled-components'

function Input(props) {
  
  return (
    <InputText 
      type={props.use} 
      light={props.light} 
      bgColor={props.bgColor} 
      width={props.width+'px'}
      border={props.border}
      placeholder={props.hint}
      value={props.value} 
      onChange={props.onChange} 
    />
  )
}

const InputText = styled.input `
  background: ${props => props.bgColor};
  color: ${props => props.light ? 'white' : 'grey'};
  padding: 10px;
  width: ${props => props.width};
  min-width: 200px;
  margin: 5px;
  border-color: ${props => props.border};
  border-radius: 5px;
  &:focus-visible {
    outline: none;
  }
`

export default Input
