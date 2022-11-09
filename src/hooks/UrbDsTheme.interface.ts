import {ReactChild} from 'react';
import {DefaultTheme} from 'styled-components/native';
import {TUrbOptions} from '../config/UrbConfig';

export interface IBrandTheme {
  theme: DefaultTheme;
  style_type: string;
}

export interface IUrbProvider {
  children: ReactChild;
  theme: DefaultTheme;
}

export interface IUrbContext {
  changeTheme: (theme: DefaultTheme) => void;
  themeSelected: DefaultTheme;
  urbTheme: TUrbOptions;
}
