import React from 'react';
import * as S from './style'

export type ButtonProps = {
  onPress: () => void;
};

const UrbButton = ({onPress}: ButtonProps) => (
  <S.Container
    onPress={onPress}
    activeOpacity={0.8}
  >
    <S.TextButton>
      Hello world
    </S.TextButton>
  </S.Container>
);

export default UrbButton
