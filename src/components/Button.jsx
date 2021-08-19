import React from 'react'
import styled from 'styled-components'

function Button(props) {
  return (
    <ButtonStyle
      primary={props.primary}
      danger={props.danger}
      success={props.success}
    >{props.title || 'Botón'}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button `
  padding: 12px;
  margin: 5px;
  min-width: 80px;
  background: ${props => props.primary ? 'cornflowerblue' : props.danger ? 'crimson' : props.success ? 'seagreen' : 'silver'};
  color: ${props => props.primary ? 'white' : props.danger ? 'white' : props.success ? 'white' : 'grey'};
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold
`

export default Button
