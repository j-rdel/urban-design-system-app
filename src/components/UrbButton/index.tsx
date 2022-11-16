import React, { useState } from 'react';
import { AccessibilityProps, TouchableOpacityProps } from "react-native";
import { useUrb } from '../../hooks/UrbTheme';
import UrbLabel from '../UrbLabel';
import UrbIcon from '../UrbIcon';

import * as S from './style'

export type TType = 'primary' | 'secondary'
export type TWidth = 'default' | 'small'

interface Props extends TouchableOpacityProps {
  children: string
  type?: TType
  width?: TWidth
  disabled?: boolean
  loading?: boolean
  icon?: string
  accessibility?: AccessibilityProps
};

const UrbButton = ({
  children = "Primary Button",
  type = "primary",
  width = "default",
  disabled = false,
  loading,
  icon,
  accessibility,
  ...Props
}: Props) => {

  const [pressed, setPressed] = useState(false);
  const { themeSelected } = useUrb();

  const chooseLabelColor = () => {
  
    if (disabled) {
      return themeSelected.global.ColorNeutralHighLight
    } else if (type == 'secondary' && themeSelected.brandName == 'atlantis') {
      return themeSelected.brand.BrandColorTertiaryDark
    } else if (type == 'secondary' && themeSelected.brandName == 'orion') {
      return themeSelected.brand.BrandColorPrimaryDark
    }
  
    return themeSelected.global.ColorNeutralLowPure;
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
      width={width}
      isPressed={pressed}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      isDisabled={disabled}
      disabled={disabled || loading}
      touchSoundDisabled={false}
      activeOpacity={1}
      >
      { loading ?
        <S.Loading />
        : <>
          {icon && <UrbIcon icon={icon} color={chooseLabelColor()}/>}
          <UrbLabel text={children} color={chooseLabelColor()} />
        </>
      }
    </S.Container>
  );
}

export default UrbButton;