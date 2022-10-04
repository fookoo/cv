import React, { VFC } from 'react'
import {
  BackgroundStyled,
  BoxStyled,
  DescriptionBoxStyled,
  LogoContainer,
  NameStyled
} from './logo.style'

export const Logo: VFC = () => {
  return (
    <LogoContainer>
      <BackgroundStyled>
        <BoxStyled>
          <NameStyled>E30</NameStyled>
          <DescriptionBoxStyled>
            <div>s</div>
            <div>t</div>
            <div>u</div>
            <div>d</div>
            <div>i</div>
            <div>o</div>
          </DescriptionBoxStyled>
        </BoxStyled>
      </BackgroundStyled>
    </LogoContainer>
  )
}
