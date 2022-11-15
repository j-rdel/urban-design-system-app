import styled, {DefaultTheme} from "styled-components/native";
import { TType, TWidth } from ".";
import { fontFamily } from "../../utils/fontFamily";
import { shadow } from "../../utils/shadow";

interface Props {
  type: TType;
  width: TWidth,
  isPressed: boolean;
  isDisabled: boolean;
  color?: string;
}

export const Container = styled.TouchableOpacity<Props>`
  ${p => shadow(p.theme.global.ShadowLevel3)}
  width: ${p => chooseWidth(p.width)};
  height: 50px;
  border-radius: ${p => p.theme.global.BorderRadiusPill};
  background-color: ${p => chooseBackground(p.theme, p.type, p.isPressed, p.isDisabled)};
  padding: ${p => p.theme.global.SpacingNano};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-width: ${p => p.theme.global.BorderWidthNone};
`

const chooseBackground = (
  theme: DefaultTheme,
  type: TType,
  isPressed: boolean,
  isDisabled: boolean
) => {

  if (isDisabled) return theme.global.ColorNeutralLowMedium

  if (theme.brandName == 'atlantis'){
    if (type == "primary") {
      if (isPressed) return theme.brand.BrandColorTertiaryDark
      
      return theme.brand.BrandColorTertiaryPure
    } else if (type == "secondary") {
      if (isPressed) return theme.brand.BrandColorSecondaryLight;
      
      return theme.brand.BrandColorSecondaryPure;
    }
  } else if (theme.brandName == 'orion') {
    if (type == "primary") {
      if (isPressed) return theme.brand.BrandColorSecondaryDark
      
      return theme.brand.BrandColorSecondaryPure
    } else if (type == "secondary") {
      if (isPressed) return theme.brand.BrandColorPrimaryLight;
      
      return theme.brand.BrandColorSecondaryLight;
    }
  }

  return theme.global.ColorNeutralHighPure;;
};

const chooseWidth = (
  width: string
) => {

  if (width == 'small') return '240px'

  return '320px'
};

export const Loading = styled.View`
   height: 24px;
   align-items: center;
   justify-content: center;
`