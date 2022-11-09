import React, { useEffect, useState } from "react";
import { AccessibilityProps, TouchableOpacityProps, View } from "react-native";
import DhaLoading from "../DhaLoading";
import { useDha } from "../../hooks/DhaTheme";
import DhaIcon from "../DhaIcon";
import * as S from './style'

export type TType = 'primary' | 'secondary' | 'tertiary' | 'tertiary-low';

interface Props extends TouchableOpacityProps {
   children: string;
   type?: TType;
   inversed?: boolean;
   icon?: string;
   disabled?: boolean;
   loading?: boolean;
   accessibility?: AccessibilityProps;
   testID?: string;
}

const DhaButton = ({
   children,
   type = "primary",
   icon,
   inversed = false,
   disabled = false,
   loading,
   accessibility,
   testID,
   ...Props
}: Props) => {
   const [pressed, setPressed] = useState(false);
   const { themeSelected } = useDha();
   useEffect(() => {
      inversed && type === 'tertiary-low' ? type = "tertiary" : type
   }, [type])

   const chooseLabelColor = () => {
      let color = themeSelected.global.ColorNeutralLightPure;
      if (!inversed) {
         if (disabled) {
            color = themeSelected.global.ColorNeutralDarkUp;
         }
         if (type == "secondary" || type == "tertiary") {
            color = themeSelected.color.ColorBrandPrimaryPure;
            if (pressed) {
               color = themeSelected.color.ColorBrandPrimaryDark;
            }
            if (disabled) {
               color = themeSelected.global.ColorNeutralDarkUp;
            }
            if (disabled && type == "tertiary") {
               color = themeSelected.global.ColorNeutralMedium;
            }

         }
      } else {
         color = themeSelected.global.ColorNeutralLightPure;
         if (type == "primary") {
            color = themeSelected.global.ColorNeutralDarkPure;
            if (disabled) {
               color = themeSelected.global.ColorNeutralMedium;
            }
         }
         if (type == "tertiary") {
            color = themeSelected.global.ColorNeutralDarkUp;
            if (disabled) {
               color = themeSelected.global.ColorNeutralMedium;
            }
            if (pressed) {
               color = themeSelected.global.ColorNeutralDarkDown;
            }
         }
      }
      if (type == "tertiary-low") {
         color = themeSelected.global.ColorNeutralDarkUp;
         if (disabled) {
            color = themeSelected.global.ColorNeutralMedium;
         }
         if (pressed) {
            color = themeSelected.global.ColorNeutralDarkDown;
         }
      }
      return color;
   };

   return (
      <S.Container
         {...accessibility}
         {...Props}
         accessible={true}
         accessibilityState={{ disabled: disabled || loading }}
         accessibilityRole="button"
         accessibilityHint={children}
         accessibilityValue={{
            text: loading ? 'Carregando' : children,
         }}
         type={type}
         isInversed={inversed}
         isPressed={pressed}
         onPressIn={() => setPressed(true)}
         onPressOut={() => setPressed(false)}
         isDisabled={disabled}
         disabled={disabled || loading}
         testID={testID}
         activeOpacity={1}
      >
         {loading ?
            <S.Loading>
               <DhaLoading testID='button_activityindicator' color={type === 'primary' && inversed ? 'dark' : 'light'} />
            </S.Loading>
            : <>
               <S.Label
                  isDisabled={disabled}
                  isInversed={inversed}
                  isPressed={pressed}
                  type={type}
                  color={chooseLabelColor()}
                  testID='button_text'
               >
                  {icon ? children + " " : children}
               </S.Label>
               {icon ? <DhaIcon icon={icon} testID='button_icon_view' color={chooseLabelColor()} /> : <View style={{ height: 24 }} />}
            </>
         }
      </S.Container>
   );
}
export default DhaButton;