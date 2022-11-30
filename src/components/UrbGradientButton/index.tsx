import React, { useEffect, useState } from 'react';
import { AccessibilityProps, TouchableOpacityProps } from "react-native";
import { useUrb } from '../../hooks/UrbTheme';
import UrbLabel from '../UrbLabel';
import UrbIcon from '../UrbIcon';

import * as S from './style'
import Gradient from './Gradient';

export type TWidth = 'default' | 'small'

interface Props extends TouchableOpacityProps {
  children: string
  width?: TWidth
  disabled?: boolean
  loading?: boolean
  icon?: string
  accessibility?: AccessibilityProps
};

const UrbGradientButton = ({
  children = "Primary Button",
  width = "default",
  disabled = false,
  loading,
  icon,
  accessibility,
  ...Props
}: Props) => {

  const { themeSelected } = useUrb()

  const [pressed, setPressed] = useState(false)

  const chooseLabelColor = () => {
    if (disabled) return themeSelected.global.ColorNeutralHighLight
  
    return themeSelected.global.ColorNeutralLowPure;
  };

  const chooseBackground = () => {
    if (disabled) return themeSelected.brand.BrandColorDisabledGradient

    if (pressed) return themeSelected.brand.BrandColorPressedGradient

    return themeSelected.brand.BrandColorGradient
  }

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
        width={width}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        disabled={disabled || loading}
        touchSoundDisabled={false}
        activeOpacity={1}
        >
      <Gradient colors={chooseBackground()}>
        { loading ?
          <S.Loading />
          : <>
            {icon && <UrbIcon icon={icon} color={chooseLabelColor()}/>}
            <UrbLabel text={children} color={chooseLabelColor()} />
          </>
        }
      </Gradient>
    </S.Container>
  );
}

export default UrbGradientButton;