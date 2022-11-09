import styled, { DefaultTheme } from "styled-components/native";
import { TType } from ".";
import { fontFamilyDevice } from "../../utils/fontFamily";
import { lineSizeCalc } from "../../utils/lineSizeCalc";

interface Props {
   type: TType;
   isInversed: boolean;
   isPressed: boolean;
   isDisabled: boolean;
   color?: string;
}

export const Container = styled.TouchableOpacity<Props>`
   min-width: 160px;
   width: 100%;
   border-radius: ${p => p.theme.global.BorderRadiusPill};
   background-color: ${p => chooseBackground(p.theme, p.type, p.isInversed, p.isPressed, p.isDisabled)};
   padding: ${p => p.theme.global.SpacingSquishLg};
   justify-content: center;
   align-items: center;
   flex-direction: row;
   border-width: ${p => chooseBorderWidth(p.theme, p.type, p.isInversed, p.isDisabled)};
   border-color: ${p => p.isInversed == false ? p.theme.color.ColorBrandPrimaryPure : p.theme.global.ColorNeutralLightPure};
   opacity: ${p => chooseOpacity(p.type, p.isDisabled, p.isInversed)};
`

export const Loading = styled.View`
   height: 24px;
   align-items: center;
   justify-content: center;
`

export const Label = styled.Text<Props>`
   ${p => fontFamilyDevice(p.theme.dotz.FontFamilyBase, p.theme.global.FontWeightBold)};
   ${p => lineSizeCalc({ fontSize: p.theme.global.FontSizeXs, lineHeight: p.theme.global.LineHeightDefault })};
   color:${p => p.color};
`

const chooseBorderWidth = (
   theme: DefaultTheme,
   type: TType,
   isInversed: boolean,
   isDisabled: boolean
) => {
   let border = '0';

   if (type == "secondary") {
      border = theme.global.BorderWidthMd
      if (isInversed == false && isDisabled) {
         border = '0'
      }
   }
   return border;
}

const chooseOpacity = (
   type: TType,
   isDisabled: boolean,
   isInversed: boolean,
   
) => {
   let opacity = '1';
   
   if (isInversed && type == "secondary" && isDisabled) {
      opacity = '0.48';
   }
   if (isInversed && type == "tertiary" && isDisabled) {
      opacity = '0.48';
   }
   if (isInversed && type == "tertiary" && isDisabled) {
      opacity = '0.48';
   }

   return opacity;
}

const chooseBackground = (
   theme: DefaultTheme,
   type: TType,
   isInversed: boolean,
   isPressed: boolean,
   isDisabled: boolean
) => {
   let color = 'transparent';

   if (isInversed) {
      color = 'transparent';
      if (type == "primary") {
         color = theme.global.ColorNeutralLightPure;
         if (isPressed) {
            color = theme.global.ColorNeutralLightDown;
         }
         if (isDisabled) {
            color = theme.global.ColorNeutralLightUp;
         }
      }
      if (type == "secondary") {
         color = 'transparent';
         if (isPressed) {
            color = theme.global.ColorNeutralLightPure+'70';
         }
      }
   } else {
      color = 'transparent';

      if (type == "primary") {
         color = theme.color.ColorBrandPrimaryPure;
         if (isPressed) {
            color = theme.color.ColorBrandPrimaryDark;
         }
         if (isDisabled) {
            color = theme.global.ColorNeutralLightUp;
         }
      }
      if (type == "secondary") {
         color = 'transparent';

         if (isPressed) {
            color = theme.color.ColorBrandPrimaryLight;
         }
         if (isDisabled) {
            color = theme.global.ColorNeutralLightUp;
         }
      }
   }

   return color;
};

