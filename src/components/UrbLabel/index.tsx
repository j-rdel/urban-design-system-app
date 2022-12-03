import React from 'react';

import * as S from './style'

interface Props {
  text: string
  color: string
};

const UrbLabel = ({
  text,
  color
}: Props) => {

  return (
      <S.Label
        color={color}
      >
        {text}
      </S.Label>
  );
}

export default UrbLabel;