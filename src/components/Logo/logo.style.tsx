import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const logoAnimation = keyframes`
  0% {
    background: #fff;
    width: 100%;
    height: 100%;
  }
  100% {
    background: #000;
    width: auto;
    height: auto;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #000;
`

export const BackgroundStyled = styled.div`
  transition: all 1s ease-in;
  background: #000;

  animation: ${logoAnimation} 2s alternate-reverse;
`

export const BoxStyled = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 0.125rem;
`

export const NameStyled = styled.div`
  background: #000;
  color: #fff;

  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  padding: 0.4rem 0.5rem;
  line-height: 1;
`

export const DescriptionBoxStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  margin-top: 0.5rem;
  padding: 0 0.25rem;
  text-transform: uppercase;

  opacity: 0;
`
