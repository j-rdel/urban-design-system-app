import React, {createContext, useState, useContext} from 'react';
import {DefaultTheme, ThemeProvider} from 'styled-components/native';

import {urbTheme} from '../config/UrbConfig';

import {IUrbContext, IUrbProvider} from './UrbDsTheme.interface';

export const UrbBrand = urbTheme;

export const UrbContext = createContext({} as IUrbContext);

export function UrbProvider({theme, children}: IUrbProvider) {
  const [themeSelected, setThemeSelected] = useState(theme);

  function changeTheme(theme: DefaultTheme) {
    setThemeSelected({
      ...theme,
      brandName: theme.brandName,
    });
  }

  return (
    <UrbContext.Provider value={{changeTheme, themeSelected, urbTheme}}>
      <ThemeProvider
        theme={{
          ...themeSelected,
        }}>
        {children}
      </ThemeProvider>
    </UrbContext.Provider>
  );
}

export function useUrb() {
  return useContext(UrbContext);
}
