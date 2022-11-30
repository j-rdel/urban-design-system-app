import {css} from 'styled-components/native';
import {Platform} from 'react-native';

function fontFamily(
  fontName: string,
  fontWeight: string,
  isStyleSheet = false,
) {
  const fontAndroid = `${fontName.toLocaleLowerCase()}_${fontWeight}`;

  if (isStyleSheet) {
    return Platform.OS === 'ios' ? fontName : fontAndroid;
  } else {
    return css`
      font-family: ${Platform.OS === 'ios' ? fontName : fontAndroid};
      font-weight: ${fontWeight};
    `;
  }
}

export {fontFamily};