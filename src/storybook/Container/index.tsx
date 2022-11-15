import React from 'react';

import {UrbProvider, UrbBrand} from './../../../src/hooks/UrbTheme';

interface Props {
  children: React.ReactNode;
}

function Container({children}: Props) {
  return (
    <UrbProvider theme={UrbBrand.orion.Default}>
      <>{children}</>
    </UrbProvider>
  );
}

export default Container;
