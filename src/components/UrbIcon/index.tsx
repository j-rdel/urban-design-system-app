import React from 'react';
import {SvgXml} from 'react-native-svg';

interface Props {
  icon: string;
  color: string;
}

function UrbIcon({icon, color}: Props) {

  return (
    <SvgXml
      xml={icon}
      color={color}
      fill={color}
    />
  );
}

export default UrbIcon;
