import {css} from 'styled-components/native';
import { ShadowLevelType } from '../tokens/globals';

function shadow(level: ShadowLevelType){

  console.log(level)

  return css`
    shadowColor: ${level.shadowColor};
    shadowOffset: {${level.shadowOffset.width}, ${level.shadowOffset.height}};
    shadowOpacity: ${level.shadowOpacity};
    shadowRadius: ${level.shadowRadius};
    elevation: ${level.elevation}};
  `;
}

export {shadow};