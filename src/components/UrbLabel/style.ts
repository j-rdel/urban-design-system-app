import styled from "styled-components/native";
import { fontFamily } from "../../utils/fontFamily";

interface Props {
  color: string;
}

export const Label = styled.Text<Props>`
  ${p => fontFamily(p.theme.global.FontFamily, p.theme.global.FontWeightBold)}
  color: ${p => p.color};

  @font-face {
    font-family: 'Cabin';
    src: url('../../assets/fonts/cabin_400.ttf')
  }
`
