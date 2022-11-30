import styled from "styled-components/native";
import { TWidth } from ".";
import { shadow } from "../../utils/shadow";

interface Props {
  width: TWidth,
}

export const Container = styled.TouchableOpacity<Props>`
  ${p => shadow(p.theme.global.ShadowLevel3)}
  width: ${p => chooseWidth(p.width)};
  height: 50px;
  border-radius: ${p => p.theme.global.BorderRadiusPill};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Loading = styled.View`
   height: 24px;
   align-items: center;
   justify-content: center;
`

const chooseWidth = (
  width: string
) => {

  if (width == 'small') return '240px'

  return '320px'
};
