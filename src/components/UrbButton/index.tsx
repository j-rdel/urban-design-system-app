import React, { useState } from 'react';
import { AccessibilityProps, TouchableOpacityProps } from "react-native";
import * as S from './style'

export type TOrdinal = 'primary' | 'secondary' | 'tertiary' | 'tertiary-low';

interface Props extends TouchableOpacityProps {
  children: string;
  type?: TOrdinal;
  inversed?: boolean;
  icon?: string;
  disabled?: boolean;
  loading?: boolean;
  accessibility?: AccessibilityProps;
  testID?: string;
};

const UrbButton = ({
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

  const [pressed, setPressed] = useState(false)

  return (
    <S.Container
      onPress={() => {}}
      activeOpacity={0.8}
      >
      <S.TextButton>
        Button Primary
      </S.TextButton>
    </S.Container>
  );
}

export default UrbButton;