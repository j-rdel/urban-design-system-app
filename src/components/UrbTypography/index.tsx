import React from 'react';
import {TextProps} from 'react-native';
import * as S from './style';

export type TSize = 'lg' | 'md' | 'sm';
export type TType = 'title' | 'subtitle' | 'paragraph';
export type TALign = 'center' | 'left' | 'right';

interface Props extends TextProps {
  children: string;
  size?: TSize;
  type?: TType;
  textAlign?: TALign;
  inversed?: boolean;
}

function UrbTypography({
  children = "Typography",
  size = 'md',
  type = 'title',
  textAlign = 'left',
  inversed,
  ...props
}: Props) {

  return (
    //@ts-ignore
    <S.Typography
      {...props}
      type={type}
      accessibilityHint={children}
      size={size}
      inversed={inversed}
      textAlign={textAlign}>
      {children}
    </S.Typography>
  );
}

export default UrbTypography;
