import {fontScaled} from './scaled';
import {css} from 'styled-components/native';

interface FontProps {
  fontSize: string;
  lineHeight: string;
  scaled?: boolean;
}

function lineSize({fontSize, lineHeight, scaled = false}: FontProps) {
  const _fontSize = Number(fontSize.replace(/\D/g, ''));

  let _lineHeight = Number(lineHeight.replace(/\D/g, ''));
  _lineHeight = (_lineHeight - 100) / 100;

  const lineCalc = `${_fontSize + _fontSize * _lineHeight + 2}px`;

  return css`
    font-size: ${scaled ? fontScaled(fontSize) : fontSize};
    line-height: ${scaled ? fontScaled(lineCalc) : lineCalc};
  `;
}

export {lineSize};
