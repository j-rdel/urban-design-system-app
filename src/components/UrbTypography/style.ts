import styled, { DefaultTheme } from 'styled-components/native';
import { lineSize } from '../../utils/lineSize';
import { fontFamily } from '../../utils/fontFamily';

import { TSize, TType, TALign } from './index';

interface PropsText {
  size: TSize;
  type: TType;
  inversed?: boolean;
  textAlign: TALign;
}

export const Typography = styled.Text<PropsText>`
  color: ${p => p.inversed ? p.theme.global.ColorNeutralLowPure : p.theme.global.ColorNeutralHighPure};
  ${p => fontSize(p.type, p.size, p.theme)};
  ${p => fontFamilySize(p.type, p.theme)};
  text-align: ${p => p.textAlign};
`;

const fontFamilySize = (type: TType, theme: DefaultTheme) => {
  if (type === 'title' || type === 'subtitle') return fontFamily(theme.global.FontFamily, theme.global.FontWeightBold);
  if (type === 'paragraph') return fontFamily(theme.global.FontFamily, theme.global.FontWeightRegular)
};

const whichSizeTitle = (theme: DefaultTheme, size:TSize) => ({
  "lg": theme.global.FontSizeXl,
  "md": theme.global.FontSizeLg,
  "sm": theme.global.FontSizeMd
}[size])

const whichSizeSubtitle = (theme: DefaultTheme, size:TSize) => ({
  "lg": theme.global.FontSizeSm,
  "md": theme.global.FontSizeXs,
  "sm": theme.global.FontSizeXxs
}[size])

const whichSizeParagraph = (theme: DefaultTheme, size:TSize) => ({
  "x-lg": theme.global.FontSizeXl,
  "lg": theme.global.FontSizeXs,
  "md": theme.global.FontSizeXxs,
  "sm": theme.global.FontSizeXxxs
}[size])

const whichType = (theme: DefaultTheme, type:TType, size:TSize) => ({
  "title": whichSizeTitle(theme, size),
  "subtitle": whichSizeSubtitle(theme, size),
  "paragraph": whichSizeParagraph(theme, size),
}[type])

const fontSize = (type: TType, size: TSize, theme: DefaultTheme) => {
  return lineSize({
    fontSize: whichType(theme, type, size),
    lineHeight: theme.global.LineHeightDefault,
    scaled: true,
  });
};
