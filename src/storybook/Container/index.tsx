import React from 'react';
import * as S from './style'

import {UrbProvider, UrbBrand} from './../../../src/hooks/UrbTheme';

interface Props {
  children: React.ReactNode;
}

function Container({children}: Props) {
  return (
    <>
      <UrbProvider theme={UrbBrand.atlantis.Default}>
        <>{children}</>
      </UrbProvider>
      <S.Divider />
      <UrbProvider theme={UrbBrand.orion.Default}>
        <>{children}</>
      </UrbProvider>
    </>
  );
}

export default Container;
